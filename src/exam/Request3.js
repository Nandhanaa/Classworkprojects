import React from 'react'

export default function Request1() {
    var name=["Chatgpt","Bard","Open Ai","Tome"]
  return (
    <div><h1>{name.map((n)=><Disp name={n} />)}</h1></div>
  )
}


 function Disp(props) {
  return (
    <div><p>{props.name}</p></div>
  )
}

