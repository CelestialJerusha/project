import React from 'react';
import './App.css'
import Login from './Components/Login'
import Typinginput from './Components/Typinginput';


const App = () =>{
    const click = () => {
        
    }
    return (
        <div>
            <div className='header'> 
                <h3>TypeCat</h3>
                <button onClick={click}>Signup</button>
            </div>
            {/* <Login /> */}
            <Typinginput />
        </div>
    )
}



export default App;