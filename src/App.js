import React from "react";
import Header from "./Header/Header";
import './App.css';
import Location from "./Card/location";
import GasStation from "./Card/gasStation";
import Track from "./Card/track";
import BasicMap from "./Map/Map1";

function App() {
  const lattitude = 123;
  const longitude = 456;
  const gaslatt = 78;
  const gaslong = 910;
  return (
    
    <div className="App">
      <Header/>

      <div className="Cards">
        <Location
        lattitude={lattitude}
        longitude={longitude}/>
        <GasStation
        gaslatt = {gaslatt}
        gaslong = {gaslong}/>
        <Track/>

      </div>
      <div className="a">
        <h1 className="app1">Track your vehicle here!</h1>
      </div>
      <BasicMap/> 
      
    </div>
  );
}

export default App;
