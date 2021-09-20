import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import osm from "./osmProvider"
import {useRef, useState} from 'react';
import "./Map.css"
import "leaflet/dist/leaflet.css";


const BasicMap = () => {
        const [center, setCenter] = useState({ lat: 13.084622, lng: 80.248357 });
        const ZOOM_LEVEL = 9;
        const mapRef = useRef();
    
    return (
        <>
        <div className="map1">
        <MapContainer center={center} zoom={ZOOM_LEVEL} ref={mapRef}>
        <TileLayer
            url={osm.maptiler.url}
            attribution={osm.maptiler.attribution}
        />
  
        </MapContainer>
        </div>
        </>
    );
};

export default BasicMap;
