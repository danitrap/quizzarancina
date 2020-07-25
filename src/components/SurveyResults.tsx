import React, { Dispatch } from "react";
import { ISurveyQuestion } from "../interfaces/survey.interface";

interface ISurveyResultsProps {
  result: string;
  reset: () => void;
}

export default function SurveyResults({ result, reset }: ISurveyResultsProps) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{result}</h5>
        <button className="btn btn-primary" onClick={() => reset()}>
          Ricomincia
        </button>
      </div>
    </div>
  );
}
