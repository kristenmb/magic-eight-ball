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
      isAnswerVisible: false,
      answers: allAnswers
    }
  }

  toggleAnswer = () => {
    this.setState({ isAnswerVisible: !this.state.isAnswerVisible })
  }

  render() {
    console.log(this.state.answers)
    return (
      <div className="App">
        <Header />
        <Questions />
        { !this.state.isAnswerVisible && <EightBall showAnswer={this.toggleAnswer}/> }
        { this.state.isAnswerVisible && <Answer answers={this.state.answers} hideAnswer={this.toggleAnswer}/> }
        <Footer /> 
      </div>
  );
}
}

export default App;
