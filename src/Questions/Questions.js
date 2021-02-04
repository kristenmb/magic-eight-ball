import React, { Component } from 'react'
import "./Questions.css"

class Questions extends Component {
  constructor() {
    super()
    this.state = {
      question: "",
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  render() {
    return (
      <form>
        <input
          className="question-input"
          name="question"
          placeholder="Ask your question here"
          value={this.state.question}
          onChange={this.handleChange}
          />
          <p className="info">Click the 8-ball to ask your question</p>
    </form>
  )
  }
}

export default Questions 