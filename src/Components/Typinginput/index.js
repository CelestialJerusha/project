import React from "react";
import './index.css'


const Typinginput = () =>{
    function click15(){
        console.log(15);
    }
    function click30(){
        console.log(30);
    }
    function click50(){
        console.log(50);
    }
    return(
        <div>
            <div className="top">
                <p>15</p>
                <div>
                    <span onClick={click15}>15</span>
                    <span onClick={click30}>30</span>
                    <span onClick={click50}>50</span>
                </div>
            </div>
                <input className='inputContext' type="text" />
        </div>
    )
}

export default Typinginput