import React, { Component } from 'react'

export default class Newbutton extends Component {
  render(props) {
    return (
      <div> <h1>{this.props.name}</h1>
      <button type="button">Submit</button></div>
    )
  }
}
