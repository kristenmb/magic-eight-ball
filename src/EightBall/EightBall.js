import React from 'react'
import eightball from "./eightball.png"
import "./EightBall.css"

const EightBall = (props) => {
  return (
    <article className="eight-ball" onClick={props.showAnswer}>
      <img 
        alt="Black eight ball" 
        src={eightball} 
        className="eightball-front"
      />
    </article>
  )
}

export default EightBall 