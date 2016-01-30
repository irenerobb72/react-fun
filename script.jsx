import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const mountNode = document.getElementById('app')

class Button extends Component {
  localHandleClick() {
    this.props.localHandleClick(this.props.increment)
  }
  render() {
    return (
      <button onClick={this.props.localHandleClick.bind(this)}>+{this.props.increment}</button>
    )
  }
}

class Result extends Component {
  render() {
    return (
      <div>{this.props.localCounter}</div>
    )
  }
}

class Main extends Component {
  constructor(props){
    super(props)
    this.state = {
      counter: 0
    }
  }
  handleClick(increment) {
    this.setState({counter: this.state.counter+increment})
  }
  render() {
    return (
      <div>
        <Button localHandleClick={this.handleClick} increment={1} />
        <Button localHandleClick={this.handleClick} increment={5} />
        <Button localHandleClick={this.handleClick} increment={10} />
        <Button localHandleClick={this.handleClick} increment={100} />
        <Result localCounter={this.state.counter} />
      </div>
    )
  }
}

ReactDOM.render(<Main />, mountNode)
