import { ISurveyQuestion } from "./survey.interface";

export interface ISurveyState {
  questions: ISurveyQuestion[];
  currentStep: ISurveyQuestion | null;
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
  payload: ISurveyQuestion[];
}

export type SurveyAction = AnswerChosenAction | ResetAction;
