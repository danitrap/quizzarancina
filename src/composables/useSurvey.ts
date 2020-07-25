import { useReducer, useEffect } from "react";
import { ISurveyQuestion } from "../interfaces/survey.interface";
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

export function useSurvey(questions: ISurveyQuestion[]) {
  const [{ result, end, stepId }, dispatch] = useReducer(
    surveyReducer,
    initialState
  );

  const currentStep = questions[stepId];

  const reset = () =>
    dispatch({ type: SurveyActionEnum.RESET, payload: questions.length });

  useEffect(() => reset(), [questions]);

  return {
    currentStep,
    result,
    end,
    reset,
    dispatch,
  };
}
