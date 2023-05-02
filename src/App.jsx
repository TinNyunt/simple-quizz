import React, { useState, useEffect } from "react";
import Quizz from "./Data/Question.jsx";

function App() {
  const [CurrentQuestion, setcurrentQuestion] = useState(0);
  const [ShowScore, setshowScore] = useState(false);
  const [GoodChoice, setgoodChoice] = useState(0);
  const [BadChoice, setbadChoice] = useState(0);
  const [Wrongcolor, setwrongColor] = useState(false);
  const [Disabled, setDisabled] = useState(false);

  const clickhanlder = isCorrect => {
    if (isCorrect == true) {
      setgoodChoice(GoodChoice + 1);
      setDisabled(true);
    }
    if (isCorrect == false) {
      setbadChoice(BadChoice + 1);
      setwrongColor(true);
      setDisabled(true);
      setTimeout(() => {
        setwrongColor(false);
      }, 1500);
    }
    const nextQuest = CurrentQuestion + 1;

    setTimeout(() => {
      if (nextQuest < Quizz.length) {
        setcurrentQuestion(nextQuest);
      } else {
        setshowScore(true);
      }
      setDisabled(false);
    }, 2000);
  };

  const refresh = () => {
    window.location.reload(false);
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
            <div onClick={() => refresh()} className="refreshbtn">
              <p>Restart</p>
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
                    style={{
                      backgroundColor: quest.color,
                      borderColor: Wrongcolor
                        ? quest.c_color
                        : "rgb(159, 187, 196)",
                    }}
                    onClick={() => !Disabled && clickhanlder(quest.isCorrect)}
                    aria-disabled={Disabled}
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
