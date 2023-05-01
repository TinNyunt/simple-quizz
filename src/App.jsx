import React, { useState, useEffect } from "react";
import Quizz from "./Data/Question.jsx";

function App() {
  const [CurrentQuestion, setcurrentQuestion] = useState(0);
  const [ShowScore, setshowScore] = useState(false);
  const [GoodChoice, setgoodChoice] = useState(0);
  const [BadChoice, setbadChoice] = useState(0);

  const clickhanlder = isCorrect => {
    if (isCorrect == true) {
      setgoodChoice(GoodChoice + 1);
    }
    if (isCorrect == false) {
      setbadChoice(BadChoice + 1);
    }
    const nextQuest = CurrentQuestion + 1;
    setTimeout(() => {
      if (nextQuest < Quizz.length) {
        setcurrentQuestion(nextQuest);
      } else {
        setshowScore(true);
      }
    }, 1000);
  };

  return (
    <div className="Container">
      <div className="holder">
        {ShowScore ? (
          <div style={{ textAlign: "center" }}>
            <div className="title">
              <p style={{ fontSize: 25 }}>One piece Myanmar Quizz</p>
            </div>
            <hr></hr>
            <div style={{ marginTop: 17 }}>
              <p style={{ color: "green", fontSize: 25 }}>Good Choice</p>
              <p>
                {GoodChoice} / {Quizz.length}
              </p>
              <p style={{ color: "red", fontSize: 25 }}>Bad Choice</p>
              <p>
                {BadChoice} / {Quizz.length}
              </p>
            </div>
          </div>
        ) : (
          <div>
            {/** Title */}
            <div className="title">
              <p
                style={{
                  fontSize: 25,
                  textAlign: "center",
                  fontWeight: "lighter",
                }}
              >
                One Piece Myanmar Quizz
              </p>
            </div>
            <hr style={{ height: 0.1 }}></hr>
            <div style={{ marginTop: 10 }}>
              {/** Question */}
              <div>
                <p style={{ fontWeight: "lighter" }}>
                  အမေး : {Quizz[CurrentQuestion].Question}
                </p>
              </div>
              {/** Images */}
              <div>
                <img className="Image" src={Quizz[CurrentQuestion].img} />
              </div>
              {/** Answer */}
              <div className="Item">
                {Quizz[CurrentQuestion].AnswerOptions?.map(quest => (
                  <div
                    className="Answer"
                    style={{ backgroundColor: quest.color }}
                    onClick={() => clickhanlder(quest.isCorrect)}
                  >
                    <p
                      style={{
                        fontSize: 18,
                        textAlign: "center",
                        fontWeight: "100",
                      }}
                    >
                      {quest.AnswerText}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
