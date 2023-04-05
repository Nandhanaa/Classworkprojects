import React, { Component } from 'react'
import axios from 'axios'


export default class Apire3 extends Component {
    state={new:[]}
    componentDidMount(){
     
        {
          axios.get(`https://jsonplaceholder.typicode.com/users`)
          .then(q=>{this.setState({new:q.data})})

        }
    }
  render() {
    return (
      <div><p>{this.state.new.map((p)=><li key={p.id}>{p.name}</li>)}</p>
     
      </div>
    )
  }
}
