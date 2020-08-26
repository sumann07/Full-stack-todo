import React from 'react';
 import './App.css';
import AddItem from "./components/AddItem";
import Notes from "./components/Notes";
import 
{ BrowserRouter as Router, 
  Link, 
  Switch,
   Route 
} 
from "react-router-dom";

function App() {
  return (
    <div className="App">
     <div className="App-2">
     <Router>
     <div> 
       <section>
         <h1 style={{fontSize:"45px",marginBottom:"2px"}}>To-Do List</h1>
          <nav >
            <li>
            <Link to='/'>
              <button className="b">
              Home</button></Link>
            </li>
            <li>
            <Link to='/addItem'>
              <button className="b">
             Add Items
              </button>
              </Link>
            </li>

           </nav>
           </section>

          <Switch>
            <Route exact path='/'>
            <Notes/>
           
            </Route>
          
            <Route exact path='/addItem'>
              <AddItem />
            </Route>
           
          </Switch>
        </div>

     

     </Router>
    </div>
    </div>
  );
}

export default App;
