import * as React from 'react';
import './location.css'

function Location() {
    return (
        <div className="headerloc" style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",position:"fixed",top:"0",height:"70%",width:"40%"}}>
            <h1>Real-time Coordinates</h1>
            <img className="imgg" src="loc.JPG" alt=""/>
            <p>Even in the most remote areas with unstable network, you will be covered by a GSM frequency band </p>
            <button/>
        </div>
    )
}

export default Location
