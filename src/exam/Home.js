import React from 'react'
import About from './About'
import { Route,Routes ,Link} from 'react-router-dom'

export default function Home() {
  return (
    <div><h1>ECommerce site Welcomes you...</h1>
    <li>
    <Link to="/about">About</Link>
    </li>
    <Routes>
   <Route path ="/about" element={<About/>} />
    </Routes></div>
  )
}
