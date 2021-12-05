import React from 'react'
import {useState} from 'react';
import './gasStation.css'

import cities from '../Map/cities.json';



function GasStation2(props) {
    const [state, setstate] = useState({lat:"",long:"",loading:false, distance:"", nearestCityName:"",nearestCityLatitude: "", nearestCityLongitude:""})

    const changeState = () => {
        setstate({data1: props.gaslatt, data2: props.gaslong})
    }

    
    function distance(lat1, lon1, lat2, lon2) {
        var p = 0.017453292519943295;    // Math.PI / 180
        var c = Math.cos;
        var a = 0.5 - c((lat2 - lat1) * p)/2 + 
                c(lat1 * p) * c(lat2 * p) * 
                (1 - c((lon2 - lon1) * p))/2;
      
        return 12742 * Math.asin(Math.sqrt(a)); // 2 * R; R = 6371 km
      }

    async function getLoc (){
        
        setstate({...state, loading: true});

        const url = "https://api.thingspeak.com/channels/1587106/feeds.json?api_key=WGH9PQYXJDHBCRF8&results=1";
        const response =  await fetch(url);
        const data = await response.json();

        const vehicleLatitude = data.feeds[0].field1;
        const vehicleLongitude = data.feeds[0].field2;


        cities.sort(function(x, y) {
            if ( distance(parseFloat(x.lat),parseFloat(x.lng),parseFloat(vehicleLatitude), parseFloat(vehicleLongitude)) < distance(parseFloat(y.lat),parseFloat(y.lng),parseFloat(vehicleLatitude), parseFloat(vehicleLongitude))) {
              return -1;
            }
            if ( distance(parseFloat(x.lat),parseFloat(x.lng),parseFloat(vehicleLatitude), parseFloat(vehicleLongitude)) > distance(parseFloat(y.lat),parseFloat(y.lng),parseFloat(vehicleLatitude), parseFloat(vehicleLongitude))) {
              return 1;
            }
            return 0;
          });

        const nearestCity = cities[0]
          console.log(nearestCity.city)
        const distFromNearestCity = distance(nearestCity.lat, nearestCity.lng, vehicleLatitude, vehicleLongitude)

        setstate({lat:vehicleLatitude, long: vehicleLongitude, loading:false, distance: "Distance: "+distFromNearestCity.toFixed(2)+" kms", nearestCityName: ("Nearest city: "+nearestCity.city),nearestCityLatitude: "Latitude: "+nearestCity.lat, nearestCityLongitude: "Longitude: "+nearestCity.lng})

    }

    

    return (
        <div className="gasgs">
            <div className="headerlocgs">
            <h1 className="loctitle">Nearest Charging center</h1>
            <img className="imgggs" src="sta.JPG" alt=""/>
            <p className="p" >Even in the most remote areas with unstable network, you will be covered by a GSM frequency band </p>
            
  
            <button className="locbuttongs" onClick={getLoc}>Know the location of the nearest gas station</button>

            {state.nearestCityName?(<div style={{fontFamily:"Readex Pro, sans-serif", color:"white",margin:"5px"}}>{state.nearestCityName}</div>):(<></>)}
            {state.distance?(<div style={{fontFamily:"Readex Pro, sans-serif", color:"white",margin:"10px"}}>{state.distance}</div>):(<></>)}
            {state.nearestCityLatitude?(<div style={{fontFamily:"Readex Pro, sans-serif", color:"white",margin:"10px"}}>{state.nearestCityLatitude}</div>):(<></>)}
            {state.nearestCityLongitude?(<div style={{fontFamily:"Readex Pro, sans-serif", color:"white",margin:"10px"}}>{state.nearestCityLongitude}</div>):(<></>)}
            {(state.nearestCityName=="")?(<></>):(<><button onClick={()=>{window.location.replace("https://google.com")}} style={{fontFamily:"Readex Pro, sans-serif", padding:"5px",marginTop:"10px"}}>View on map</button></>)}
        </div>
        </div>
    )
}

export default GasStation2
