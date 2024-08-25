import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";


L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const customIcon = new L.Icon({
  iconUrl:
    "https://www.iconpacks.net/icons/2/free-location-icon-2955-thumb.png",
  iconSize: [50, 50],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

interface ReactLeafletProps {
  latitude: number;
  longitude: number;
  title: string;
  address: string;
  width: string;
  height: string;
  borderR:string
}

const ReactLeaflet: React.FC<ReactLeafletProps> = ({
  borderR,
  latitude,
  longitude,
  title,
  address,
  width,
  height,
}) => {
  const position: [number, number] = [latitude, longitude];

  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ height: height, width: width ,borderRadius:borderR, border:"1px solid black", outline:"none"}}
    >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png"
        attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors, &copy; <a href='https://carto.com/attributions'>CARTO</a>"
      />
      <Marker position={position} icon={customIcon}>
        <Popup>
          <strong>{title}</strong>
          <br />
          {address}
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default ReactLeaflet;
