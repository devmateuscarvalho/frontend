'use client';

import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

// Ícone customizado para o Leaflet
const customIcon = L.icon({
    iconUrl: "/marker-icon.png",
    shadowUrl: "/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
});

export default function DynamicMap() {
    const position: [number, number] = [-23.55052, -46.633308];

    return (
        <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom
        className="h-[400px] w-[90%] lg:w-1/2"
        key={position.toString()} 
    >
        <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; OpenStreetMap contributors"
        />
        <Marker position={position} icon={customIcon}>
            <Popup>São Paulo, Brasil</Popup>
        </Marker>
    </MapContainer>
    );
}
