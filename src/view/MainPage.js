import React from 'react';
import {MapContainer,TileLayer,Marker,Popup} from 'react-leaflet';
import {Link} from 'react-router-dom';


const CampoGrande = [-20.443529,-54.647758]



const MainPage = ()=>{

    


    return(
        <>
            <MapContainer center={CampoGrande} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />


            </MapContainer>
        </>
    )
}

export default MainPage;