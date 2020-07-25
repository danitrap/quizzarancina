export interface ISurveyState {
  maxSteps: number;
  stepId: number;
  result: number;
  end: boolean;
}

export enum SurveyActionEnum {
  RESET = "RESET",
  ANSWER_CHOSEN = "ANSWER_CHOSEN",
}

interface AnswerChosenAction {
  type: SurveyActionEnum.ANSWER_CHOSEN;
  payload: number;
}
interface ResetAction {
  type: SurveyActionEnum.RESET;
  payload: number;
}

export type SurveyAction = AnswerChosenAction | ResetAction;
