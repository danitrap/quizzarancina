import { useReducer, useEffect, useMemo } from "react";
import {
  ISurvey,
  ISuerveyResultsTiers,
  ISurveyQuestion,
} from "../interfaces/survey.interface";
import {
  ISurveyState,
  SurveyAction,
  SurveyActionEnum,
} from "../interfaces/useSurvey.interface";

const initialState: ISurveyState = {
  questions: null,
  currentStep: null,
  stepId: 0,
  result: 0,
  end: false,
};

function init(questions: ISurveyQuestion[]) {
  return {
    ...initialState,
    questions,
    currentStep: questions[initialState.stepId],
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
        stepId: state.stepId + 1,
        currentStep: state.questions ? state.questions[state.stepId + 1] : null,
        result: state.result + action.payload,
        end: state.stepId + 1 === state.questions?.length,
      };
    default:
      return state;
  }
}

export function useSurvey({ results, questions }: ISurvey) {
  const [{ result, end, currentStep }, dispatch] = useReducer(
    surveyReducer,
    initialState
  );

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
    dispatch({ type: SurveyActionEnum.RESET, payload: questions });

  // eslint-disable-next-line
  useEffect(() => reset(), [questions]);

  return {
    currentStep,
    result: computedResult,
    end,
    reset,
    dispatch,
  };
}
