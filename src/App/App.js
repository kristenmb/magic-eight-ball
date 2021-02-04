import React, { Component } from 'react'
import allAnswers from "../Answers-data"
import Header from "../Header/Header"
import Questions from "../Questions/Questions"
import EightBall from "../EightBall/EightBall"
import Footer from "../Footer/Footer"
import Answer from "../Answer/Answer"

import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      isAnswerVisible: true,
      answers: allAnswers
    }
  }

  render() {
    console.log(this.state.answers)
    return (
      <div className="App">
        <Header />
        <Questions />
        { !this.state.isAnswerVisible && <EightBall /> }
        { this.state.isAnswerVisible && <Answer /> }
        <Footer /> 
      </div>
  );
}
}

export default App;
