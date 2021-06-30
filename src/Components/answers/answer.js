import React from "react";
import "./answer.css";
function answer(props) {
  let answer = Object.keys(props.answers).map((qAnswer, i) => (
    <li
      key={qAnswer}
      className={
        props.correctAnswer === qAnswer
          ? "correct"
          : props.clickedAnswer === qAnswer
          ? "incorrect"
          : ""
      }
      onClick={() => props.checkAnswer(qAnswer)}
    >
      {props.answers[qAnswer]}
    </li>
  ));
  return (
    <>
      <ul disabled={props.clickedAnswer ? true : false} className="Answer">
        {answer}
      </ul>
      <div>
      {props.correctAnswer
          ? "Correct Answer!"
          : props.clickedAnswer
          ? "Incorrect Answer!!!"
          : ""}
      </div>
    </>
  );
}

export default answer;
