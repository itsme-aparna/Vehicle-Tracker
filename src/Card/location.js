import * as React from 'react';
import { useState } from 'react';
import './location.css'

function Location(props){
    const [state, setstate] = useState({data:""})

    const changeState = () => {
        setstate({data1: props.lattitude, data2: props.longitude})
    };
    
    return (
        <div className="loc"> 
        <div className="headerloc">
            <h1 className="loctitle">Real-time Coordinates</h1>
            <img className="imgloc" src="coo.JPG" alt=""/>
            <p className="p" >Even in the most remote areas with unstable network, you will be covered by a GSM frequency band </p>
            
  
            <button className="locbutton" onClick={changeState}>Know the location of your vehicle</button>
            <div>{state.data1}</div>
            <div>{state.data2}</div>
            </div>
        </div>
    );
}


export default Location
