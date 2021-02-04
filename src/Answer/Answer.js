import React from 'react'
import eightballAnswer from "./eightball-answer.png"
import "./Answer.css"

const Answer = (props) => {
  console.log(props, "ANSWER")
  return (
    <article className="answer-container">
      <img
        src={eightballAnswer}
        alt="Back of eight ball"
        className="eightball-back"
      />
        <p className="answer fade-in">answer goes here</p>
    </article>
  )
}

export default Answer 