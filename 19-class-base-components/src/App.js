import React, { Component } from 'react'

export default class App extends Component {
  name = "Sethi"
  dob = "13/013/2001"
  render() {
    return (
      <div>
        <h1>Hello Mr. Raghav {this.name} {this.dob}</h1>
      </div>
    )
  }
}
