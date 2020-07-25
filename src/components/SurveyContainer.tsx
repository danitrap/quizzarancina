import React from "react";

import SurveyQuestion from "./SurveyQuestion";
import SurveyResults from "./SurveyResults";

import { ISurvey } from "../interfaces/survey.interface";
import { useSurvey } from "../composables/useSurvey";

interface SurveyContainerProps {
  survey: ISurvey;
}

export default function SurveyContainer({ survey }: SurveyContainerProps) {
  const { currentStep, result, end, reset, dispatch } = useSurvey(survey);

  return (
    <>
      <h1 className="mb-3 text-center">{survey.title}</h1>
      {end ? (
        <SurveyResults result={result} reset={reset} />
      ) : (
        <SurveyQuestion
          key={currentStep.title}
          question={currentStep}
          dispatch={dispatch}
        />
      )}
    </>
  );
}
