interface ISurveyAnswer {
  text: string;
  value: number;
}

export interface ISurveyQuestion {
  title: string;
  answers: ISurveyAnswer[];
}

export interface ISurvey {
  title: string;
  questions: ISurveyQuestion[];
}
