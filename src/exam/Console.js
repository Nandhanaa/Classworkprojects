import React, { Component } from 'react'

export default class Console extends Component {
    state={name:"john",age:25}
    change=()=>{this.setState({name:"nick"})}
  render(props) {
    return (

        <div><form>
        <label>Name</label>       
         <input type="text" name="Name" />
         <button type="button" onClick={this.setState(change={})}>Submit</button>
         </form>
        
        </div>
    )
  }
}
