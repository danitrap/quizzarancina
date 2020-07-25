import React from "react";
import SurveyContainer from "./components/SurveyContainer";

const survey = {
  title: "Che tipo di arancina sei?",
  questions: [
    {
      title: "Ti piace il burro?",
      answers: [
        {
          text: "Sì",
          value: 1,
        },
        {
          text: "No",
          value: 2,
        },
        {
          text: "Forse",
          value: 3,
        },
        {
          text: "Cos'è?",
          value: 4,
        },
      ],
    },
    {
      title: "Ti piace la carne?",
      answers: [
        {
          text: "Sì",
          value: 1,
        },
        {
          text: "No",
          value: 2,
        },
        {
          text: "Forse",
          value: 3,
        },
        {
          text: "Cos'è?",
          value: 4,
        },
      ],
    },
  ],
};

function App() {
  return (
    <div className="container">
      <SurveyContainer survey={survey} />
    </div>
  );
}

export default App;
