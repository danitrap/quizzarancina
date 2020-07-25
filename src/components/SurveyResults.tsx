import React, { Dispatch } from "react";
import { ISurveyQuestion } from "../interfaces/survey.interface";

interface ISurveyResultsProps {
  result: number;
  reset: () => void;
}

export default function SurveyResults({ result, reset }: ISurveyResultsProps) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">
          Congratulazioni, sei una arancina accarne!
        </h5>
        <button className="btn btn-primary" onClick={() => reset()}>
          Ricomincia
        </button>
      </div>
    </div>
  );
}
