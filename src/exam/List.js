import React, { Component } from 'react'

export default class List extends Component {
  render(props) {
    return (
      <div><ul>{this.props.name}</ul></div>
     
    )
  }
}


