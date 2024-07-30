import L from "leaflet";

type fontaineType =
  | "BORNE_FONTAINE"
  | "FONTNE_WALLACE"
  | "FONTAINE_BOIS"
  | "FTNE_MILLENAIRE"
  | "FONTAINE_ARCEAU"
  | "FTNE_PETILLANTE"
  | "FONTAINE_TOTEM"
  | "FONTAINE_2EN1"
  | "FTNE_POING_EAU"
  | "FONTAINE_ALBIEN";

const markerSizeConfig: Record<fontaineType, [number, number]> = {
  BORNE_FONTAINE: [36, 40],
  FONTNE_WALLACE: [20, 40],
  FONTAINE_BOIS: [32, 40],
  FTNE_MILLENAIRE: [52, 40],
  FONTAINE_ARCEAU: [24, 40],
  FTNE_PETILLANTE: [22, 40],
  FONTAINE_TOTEM: [35, 55],
  FONTAINE_2EN1: [30, 40],
  FTNE_POING_EAU: [35, 50],
  FONTAINE_ALBIEN: [38, 40],
};

const getMarkerSize = (fountain: fontaineType): [number, number] => {
  return markerSizeConfig[fountain];
};

const createCustomIcon = (fountain: fontaineType): L.Icon => {
  return new L.Icon({
    iconUrl: `/assets/markers/${fountain}.png`,
    iconSize: getMarkerSize(fountain),
    iconAnchor: [22, 44],
    popupAnchor: [-3, -76],
  });
};

export { createCustomIcon };
export type { fontaineType };
