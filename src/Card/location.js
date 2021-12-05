import * as React from 'react';
import { useState } from 'react';
import FetchLocation from '../FetchData/FetchLocation';
import './location.css'


function Location(props){
    // state = {
    //     loading: true,
    //     person: null
    // };
    const [state, setState] = useState({data:{latitude:"",longitude:""}, loading: true})
    
    async function getLoc (){
        const url = "https://api.thingspeak.com/channels/1587106/feeds.json?api_key=WGH9PQYXJDHBCRF8&results=1";
        const response =  await fetch(url);
        const d = await response.json();
        setState({data: d.feeds[0], loading:false});
    }
    // const changeState = () => {
    //     setstate({data1: props.latitude, data2: props.longitude})
    // };
    
    return (
        <div className="loc"> 
        <div className="headerloc">
            <h1 className="loctitle">Real-time Coordinates</h1>
            <img className="imgloc" src="coo.JPG" alt=""/>
            <p className="p" >Even in the most remote areas with unstable network, you will be covered by a GSM frequency band </p>
            
  
            <button className="locbutton" onClick={getLoc}>Know the location of your vehicle</button>

           {state.data.field1?(<div style={{fontFamily:"Readex Pro, sans-serif", color:"white",margin:"10px"}}> {state.data.field1?(<>{"Latitude: "+state.data.field1}</>):(<></>)}</div>):(<></>)}
            {state.data.field2?(<div style={{fontFamily:"Readex Pro, sans-serif", color:"white",margin:"10px"}}> {state.data.field1?(<>{"Longitude: "+state.data.field2}</>):(<></>)}</div>):(<></>)}
            </div>
        </div>
    );
}


export default Location
