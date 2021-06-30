import React, { Component } from "react";
import "./QuizMain.css";
import Question from "./Question/question";
import Answer from "./answers/answer";

export default class QuizMain extends Component {
  state = {
    quiestions: {
      1: 'What US city is known as the "birthplace of jazz"?',
      2: "What is the capital of Greece?",
      3: "What planet gave birth to Superman?",
    },
    answers: {
      1: {
        1: "Chicago",
        2: "New Orleans",
        3: "New York",
      },
      2: {
        1: "Athens",
        2: "Patras",
        3: "Kalamata",
      },
      3: {
        1: "Krypton",
        2: "Mars",
        3: "Saturn",
      },
    },
    correctAnswers: {
      1: "2",
      2: "1",
      3: "1",
    },
    correctAnswer: 0,
    clickedAnswer: 0,
    step: 1,
    score: 0,
  };

  checkAnswer = (answer) => {
    let { correctAnswers, step, score } = this.state;
    if (answer === correctAnswers[step]) {
      this.setState({
        score: score + 1,
        correctAnswer: correctAnswers[step],
        clickedAnswer: answer,
      });
    } else {
      this.setState({
        correctAnswer: 0,
        clickedAnswer: answer,
      });
    }
  };

  nextStep = (step) => {
    this.setState({
      step: step + 1,
      correctAnswer: 0,
      clickedAnswer: 0,
    });
  };
  render() {
    let {
      quiestions,
      answers,
      step,
      correctAnswer,
      clickedAnswer,
      score
    } = this.state;
    return (
      <div className="content">
        {step <= Object.keys(quiestions).length ? (
          <>
            <Question quiestions={quiestions[step]} />
            <Answer
              answers={answers[step]}
              checkAnswer={this.checkAnswer}
              clickedAnswer={clickedAnswer}
              correctAnswer={correctAnswer}
            />
            <button
              className="next"
              disabled={
                clickedAnswer && Object.keys(quiestions).length >= step
                  ? false
                  : true
              }
              onClick={() => this.nextStep(step)}
            >
              Next
            </button>
          </>
        ) : (
          <div className="finalPage">
            <h1>Your quiz is completed</h1>
            <p>Your  Score is {score} out of {Object.keys(quiestions).length}</p>
            <p>Than You !!!</p>
          </div>
        )}
      </div>
    );
  }
}
