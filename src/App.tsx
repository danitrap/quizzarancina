import React from "react";
import SurveyContainer from "./components/SurveyContainer";
import { ISurvey } from "./interfaces/survey.interface";

const survey: ISurvey = {
  title: "Che tipo di arancina sei?",
  questions: [
    {
      title: "Quando ti viene voglia di arancine di solito?",
      answers: [
        {
          text: "Mai",
          value: 0,
        },
        {
          text: "A Santa Lucia",
          value: 10,
        },
        {
          text: "La mattina appena sveglio",
          value: 20,
        },
      ],
    },
    {
      title: "Come ti dirigi al bar?",
      answers: [
        {
          text: "Non ci vado, non mi piacciono",
          value: 0,
        },
        {
          text: "A piedi",
          value: 10,
        },
        {
          text: "A cavallo allo scecco",
          value: 20,
        },
      ],
    },
    {
      title: "Una volta dentro il bar, come saluti i picciotti?",
      answers: [
        {
          text: "Non li saluto, perché non ci vado",
          value: 0,
        },
        {
          text: "Buongiorno, una arancina per favore",
          value: 10,
        },
        {
          text: "Ziu ci nn'è cu capuliato!?",
          value: 20,
        },
      ],
    },
    {
      title: "Quanto tempo rimani a fissare i pezzi prima di decidere?",
      answers: [
        {
          text: "Cinque minuti abbondanti",
          value: 0,
        },
        {
          text: "Non esito, ordino subito",
          value: 10,
        },
        {
          text: "Il picciotto sa già cosa voglio",
          value: 20,
        },
      ],
    },
    {
      title: "Come ti piace mangiare l'arancina?",
      answers: [
        {
          text: "Non la mangio",
          value: 0,
        },
        {
          text: "Prima il dentro e poi la crosta",
          value: 10,
        },
        {
          text: "Con un morso solo!",
          value: 20,
        },
      ],
    },
  ],
  results: {
    low: "Va manciati una cassœula, vadda'!",
    medium: "Congratulazioni, sei una arancina abburro!",
    high: "Congratulazioni, sei una arancina accarne!",
  },
};

function App() {
  return (
    <div className="container">
      <SurveyContainer survey={survey} />
    </div>
  );
}

export default App;
