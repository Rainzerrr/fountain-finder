import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import { FC, useState } from "react";
import MarkerClusterGroup from "react-leaflet-cluster";
import FountainDetailCard from "../fountain-detail-card/fountain-detail-card";
import { createCustomIcon } from "./custom-marker-config";
import { formatFountainAddress } from "./helper";
import { Fontaine } from "../../types";
import "leaflet/dist/leaflet.css";
import "./map-view.scss";

// Fix for default marker icon issue with Webpack
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

interface MapViewProps {
  fountains: Fontaine[];
}

const MapView: FC<MapViewProps> = ({ fountains }) => {
  const [currentFountain, setCurrentFountain] = useState<Fontaine>();
  const [showFontaineCard, setShowFontaineCard] = useState(false);

  const fountainsMarkers = fountains.map((fountain) => (
    <Marker
      key={fountain.gid}
      icon={createCustomIcon(fountain.type_objet)}
      eventHandlers={{
        click: () => {
          setCurrentFountain(fountain);
          setShowFontaineCard(true);
        },
      }}
      position={[fountain.geo_point_2d.lat, fountain.geo_point_2d.lon]}
    ></Marker>
  ));

  return (
    <MapContainer
      className="map-view"
      center={[48.85959431872953, 2.3454862682921904]}
      zoom={13}
      style={{ height: "calc(100dvh - 61px)", width: "100%" }}
    >
      <TileLayer
        url={`https://tile.jawg.io/jawg-lagoon/{z}/{x}/{y}{r}.png?access-token=QpF4C3OOQEmkw7QsIHJKCuaYKbzrY2BQtGFYJTNYaGUIyLwgEqpi9okscdzzVoKY`}
        attribution='<a href="https://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        minZoom={0}
        maxZoom={22}
      />

      <MarkerClusterGroup chunkedLoading>{fountainsMarkers}</MarkerClusterGroup>

      {currentFountain && showFontaineCard && (
        <FountainDetailCard
          title={currentFountain?.modele}
          imageUrl={currentFountain.type_objet}
          address={formatFountainAddress(currentFountain)}
          available={currentFountain.dispo === "OUI"}
          setShowFontaine={setShowFontaineCard}
        />
      )}
    </MapContainer>
  );
};

export default MapView;
