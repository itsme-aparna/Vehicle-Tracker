import React from 'react'
import {useState} from 'react';
import './gasStation.css'

function GasStation(props) {
    const [state, setstate] = useState({data:""})

    const changeState = () => {
        setstate({data1: props.gaslatt, data2: props.gaslong})
    }
    return (
        <div className="gasgs">
            <div className="headerlocgs">
            <h1 className="loctitle">Nearest Charging center</h1>
            <img className="imgggs" src="sta.JPG" alt=""/>
            <p className="p" >Even in the most remote areas with unstable network, you will be covered by a GSM frequency band </p>
            
  
            <button className="locbuttongs" onClick={changeState}>Know the location of the nearest gas station</button>
            <div>{state.data1}</div>
            <div>{state.data2}</div>

        </div>
        </div>
    )
}

export default GasStation
