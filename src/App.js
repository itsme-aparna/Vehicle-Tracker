import React from "react";
import Header from "./Header/Header";
import './App.css';
import Location from "./Card/location";
import GasStation2 from "./Card/gasStation2";
import Track from "./Card/track";
import BasicMap from "./Map/Marker";
import FetchLocation from "./FetchData/FetchLocation";

function App() {
  const latitude = 13.084622;
  const longitude = 80.248357;
  

  const gaslatt = 17.704052;
  const gaslong = 83.297663;
  return (
    
    <div className="App" style={{scrollBehavior:"smooth"}}>
      <Header/>

      <div className="Cards" style={{display:"flex", flexDirection:"row", justifyContent:"space-around"}}>
        <Location
        latitude={latitude}
        longitude={longitude}/>
        <GasStation2
        gaslatt = {gaslatt}
        gaslong = {gaslong}/>
        <Track/>

      </div>
      <div className="a">
        <h1 className="app1">Track your vehicle here!</h1>
      </div>
      <BasicMap/> 
      
      <div style={{width:"100%",marginTop:"10px",fontFamily:"Readex Pro, sans-serif"}}>Developed by: Aparna Patra [19BEE0069], Kumar Sanjeet Yadav [19BEE0380]</div>
    </div>
  );
}

export default App;
