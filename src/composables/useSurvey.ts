import { useReducer, useEffect, useMemo } from "react";
import {
  ISurveyQuestion,
  ISurvey,
  ISuerveyResultsTiers,
} from "../interfaces/survey.interface";
import {
  ISurveyState,
  SurveyAction,
  SurveyActionEnum,
} from "../interfaces/useSurvey.interface";

const initialState: ISurveyState = {
  stepId: 0,
  result: 0,
  end: false,
  maxSteps: 0,
};

function init(maxSteps: number) {
  return {
    ...initialState,
    maxSteps,
  };
}

function surveyReducer(
  state: ISurveyState,
  action: SurveyAction
): ISurveyState {
  switch (action.type) {
    case SurveyActionEnum.RESET:
      return init(action.payload);
    case SurveyActionEnum.ANSWER_CHOSEN:
      return {
        ...state,
        stepId: (state.stepId + 1) % state.maxSteps,
        result: state.result + action.payload,
        end: state.stepId + 1 === state.maxSteps,
      };
    default:
      return state;
  }
}

export function useSurvey({ results, questions }: ISurvey) {
  const [{ result, end, stepId }, dispatch] = useReducer(
    surveyReducer,
    initialState
  );

  const currentStep = questions[stepId];

  const { max, min } = useMemo(() => {
    return questions.reduce(
      ({ max, min }, question) => {
        return {
          max:
            max +
            Math.max.apply(
              null,
              question.answers.map((answer) => answer.value)
            ),
          min:
            min +
            Math.min.apply(
              null,
              question.answers.map((answer) => answer.value)
            ),
        };
      },
      { min: 0, max: 0 }
    );
  }, [questions]);

  const tier =
    result / ((questions.length / 3) * ((max - min) / questions.length));
  let score = "";

  switch (true) {
    case tier <= 1:
      score = "low";
      break;
    case tier <= 2:
      score = "medium";
      break;
    case tier <= 3:
      score = "high";
      break;
    default:
      throw new Error();
  }

  const computedResult = results[score as keyof ISuerveyResultsTiers];

  const reset = () =>
    dispatch({ type: SurveyActionEnum.RESET, payload: questions.length });

  useEffect(() => reset(), [questions]);

  return {
    currentStep,
    result: computedResult,
    end,
    reset,
    dispatch,
  };
}
