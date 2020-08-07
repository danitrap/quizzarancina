interface ISurveyAnswer {
  text: string;
  value: number;
}

export interface ISurveyQuestion {
  title: string;
  answers: [ISurveyAnswer, ISurveyAnswer, ISurveyAnswer];
}

export interface ISurveyResultsTiers {
  low: string;
  medium: string;
  high: string;
}

export interface ISurvey {
  title: string;
  questions: ISurveyQuestion[];
  results: ISurveyResultsTiers;
}
