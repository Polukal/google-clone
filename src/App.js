import React from 'react';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route} from 
"react-router-dom";

function App() {
  return (
    
    <Router>
     <div className="app">

       <Routes>

        <Route path='/' element={<Home />} />

        <Route path="/search"/>
          
            
          

      </Routes>


      
    </div>
    </Router>
  );
}

export default App;
