import React from 'react' 
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import L from "leaflet";
import osm from "./osmProvider"
import {useState,useRef} from 'react';
import "./Map.css"
import cities from "./cities.json";
import "leaflet/dist/leaflet.css";
import useGeoLocation from "./useGeolocation";

const markerIcon = L.icon({
    iconUrl: 'pin.png',
    iconSize: [40, 40],
  iconAnchor: [17, 46], //[left/right, top/bottom]
  popupAnchor: [0, -46], //[left/right, top/bottom]
  });

  const markerIcon2 = L.icon({
    iconUrl: 'gas-station.png',
    iconSize: [40, 40],
  iconAnchor: [17, 46], //[left/right, top/bottom]
  popupAnchor: [0, -46], //[left/right, top/bottom]
  });
  
const BasicMap = (latitude, longitude) => {
        const [state, setState] = useState({data:{latitude:"",longitude:""}, loading: true,error:""})
          


        async function getLoc (){
            const url = "https://api.thingspeak.com/channels/1587106/feeds.json?api_key=WGH9PQYXJDHBCRF8&results=1";
            const response =  await fetch(url);
            const d = await response.json();
            setState({data: d.feeds[0], loading:false});

            if (!state.loading) {
              // mapRef.current.leafletElement.flyTo(
                map.flyTo(
                //[location.coordinates.lat, location.coordinates.lng],
                [state.data.field1,state.data.field2],
                ZOOM_LEVEL,
                { animate: true }
              );
            } else {
              //alert(location.error.message);
            }

        }
        const [center, setCenter] = useState({ lat: 13.084622, lng: 80.248357 });
        const ZOOM_LEVEL = 9;
        //const mapRef = useMap();
        const [map, setMap] = useState(null);
        //const mapRef = useRef();

        //const location = useGeoLocation();

        // const showMyLocation = () => {
          
        // };
    
    return (
        <>
        <div className="map1">
        {/* <MapContainer center={center} zoom={ZOOM_LEVEL} ref={mapRef} > */}
        <MapContainer center={center} zoom={ZOOM_LEVEL} whenCreated={setMap}>
        <TileLayer
            url={osm.maptiler.url}
            attribution={osm.maptiler.attribution}
        />

             {!state.loading && (
                <Marker
                  icon={markerIcon}
                  position={[
                    state.data.field1,
                    state.data.field2,
                  ]}
                >
                <Popup>
                    <b>
                    {/* {location.coordinates.lat},
                    {location.coordinates.lng} */}
                    {state.data.field1},
                    {state.data.field2},
                    </b>
                  </Popup>
                  </Marker>
              )}
              
        {cities.map((city, idx) => (
                <Marker
                  position={[city.lat, city.lng]}
                  icon={markerIcon2}
                  key={idx}
                >
                  <Popup>
                    <b>
                      {city.city}, {city.country}
                    </b>
                  </Popup>
                </Marker>
              ))}
              
        </MapContainer>
        
        </div>
        <button  className= "LocateButton" onClick={getLoc} style={{fontFamily:"Readex Pro, sans-serif"}}>Locate my vehicle</button>
        </>
    );
};

export default BasicMap;
