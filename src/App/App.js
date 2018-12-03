import React, { Component } from 'react'
import { get, put } from '../Http/Http.js'
import './App.css'
class App extends Component {
  constructor () {
    super()
    this.state = {
      username: ''
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick () {
    get('/lights')
      .then(response => console.log(response))
    }
  turnLightOff() {
    put('/lights/1/state', {"on":true});
  }

  render () {
    return (
      <div className='button__container'>
        <button className='button' onClick={this.turnLightOff}>
          Click Me
        </button>
        <p>{this.state.username}</p>
      </div>
    )
  }
}
export default App