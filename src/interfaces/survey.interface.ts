interface ISurveyAnswer {
  text: string;
  value: number;
}

export interface ISurveyQuestion {
  title: string;
  answers: ISurveyAnswer[];
}

export interface ISuerveyResultsTiers {
  low: string;
  medium: string;
  high: string;
}

export interface ISurvey {
  title: string;
  questions: ISurveyQuestion[];
  results: ISuerveyResultsTiers;
}
