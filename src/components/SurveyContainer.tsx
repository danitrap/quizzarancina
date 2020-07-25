import React from "react";

import SurveyQuestion from "./SurveyQuestion";
import SurveyResults from "./SurveyResults";

import { ISurvey } from "../interfaces/survey.interface";
import { useSurvey } from "../composables/useSurvey";

interface SurveyContainerProps {
  survey: ISurvey;
}

export default function SurveyContainer({ survey }: SurveyContainerProps) {
  const { currentStep, result, end, reset, dispatch } = useSurvey(
    survey.questions
  );

  return (
    <>
      <h1>{survey.title}</h1>
      {end ? (
        <SurveyResults result={result} reset={reset} />
      ) : (
        <SurveyQuestion
          key={currentStep.title}
          question={currentStep}
          dispatch={dispatch}
        />
      )}
      <dl>
        <dt>result</dt>
        <dd>{result}</dd>
      </dl>
    </>
  );
}
