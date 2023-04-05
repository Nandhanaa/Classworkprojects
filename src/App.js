//import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import Request1 from './exam/Request3';
import Apire3 from './exam/Apire3';
import Home from './exam/Home'
import {BrowserRouter} from "react-router-dom"

import Option5 from './exam/Option5';



function App() {
  return (
   <div>
   <h1>..........Question 1...........</h1>
   <Request1 />
   <h1>.........Question 3............</h1>
   <Apire3 />
   <h1>........Question 4.............</h1>
   <BrowserRouter>
   <Home />
   </BrowserRouter>
   <h1>.........Question 5............</h1>
   

   <Option5 />
   <br></br>
   </div>
   
   
  );
}

export default App;
