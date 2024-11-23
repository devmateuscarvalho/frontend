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
    // Centro e zoom ajustados para exibir o Brasil inteiro
    const centerPosition: [number, number] = [-14.235004, -51.92528]; // Coordenadas aproximadas do centro do Brasil
    const zoomLevel = 3; // Zoom ajustado para exibir o país inteiro

    return (
        <MapContainer
            center={centerPosition}
            zoom={zoomLevel}
            scrollWheelZoom
            className="h-[400px] w-[90%] lg:w-[45%]"
            key={centerPosition.toString()} 
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; OpenStreetMap contributors"
            />
            <Marker position={centerPosition} icon={customIcon}>
                <Popup>Brasil</Popup>
            </Marker>
        </MapContainer>
    );
}