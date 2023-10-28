import React from 'react';
import './App.css'
import Login from './Components/Login'

const click = () => {
    // console.log(1);
        
         <Login />
            console.log(1)
           
}


const App = () =>{
    return (
        <div className='header'> 
            <h3>TypeCat</h3>
            <button onClick={click}>Signup</button>
            {/* <Login /> */}
        </div>
    )
}

export default App;