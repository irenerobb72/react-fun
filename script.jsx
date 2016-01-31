import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const mountNode = document.getElementById('app')

class Card extends Component {
  constructor(props){
    super(props)
    this.state = {
      data: ("https://api.github.com/" + this.props.login)
    }
  }
  componentWillMount() {
    const { data } = this.state
    this.setState(data)
  }
  render() {
    return (
      <div>
        <img src="{this.state.avatar_url}" width="80" />
        <h3>{this.state.name}</h3>
        <hr/>
      </div>
    )
  }
}

class Main extends Component {
  render() {
    return (
      <div>
        <Card login="spicyj"/>
        <Card login="petehunt"/>
      </div>
    )
  }
}

ReactDOM.render(<Main />, mountNode)
