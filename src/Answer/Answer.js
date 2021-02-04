import React from 'react'
import eightballAnswer from "./eightball-answer.png"
import "./Answer.css"

const Answer = ({ answers, hideAnswer }) => {
  const randomAnswer = answers[Math.floor(Math.random() * Math.floor(answers.length))]
  
  return (
    <article className="answer-container" onClick={hideAnswer}>
      <img
        src={eightballAnswer}
        alt="Back of eight ball"
        className="eightball-back"
      />
        <p className="answer fade-in">{randomAnswer}</p>
    </article>
  )
}

export default Answer 