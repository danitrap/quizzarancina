import React, { Dispatch } from "react";
import { ISurveyQuestion } from "../interfaces/survey.interface";
import {
  SurveyAction,
  SurveyActionEnum,
} from "../interfaces/useSurvey.interface";

interface ISurveyQuestionProps {
  question: ISurveyQuestion;
  dispatch: Dispatch<SurveyAction>;
}

export default function SurveyQuestion({
  question,
  dispatch,
}: ISurveyQuestionProps) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{question.title}</h5>
        <div className="list-group list-group-flush">
          {question.answers.map((answer, i) => {
            return (
              <button
                className="list-group-item list-group-item-action"
                key={`${question.title}-${i}`}
                onClick={() =>
                  dispatch({
                    type: SurveyActionEnum.ANSWER_CHOSEN,
                    payload: answer.value,
                  })
                }
              >
                {answer.text}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
