import { fontaineType } from "./components/map-view/custom-marker-config";

export interface GeoShape {
  type: string;
  geometry: {
    coordinates: [number, number];
    type: string;
  };
  properties: Record<string, unknown>;
}

export interface GeoPoint2D {
  lon: number;
  lat: number;
}

export interface Fontaine {
  gid: string;
  type_objet: fontaineType;
  modele: string;
  no_voirie_pair: string | null;
  no_voirie_impair: string | null;
  voie: string;
  commune: string;
  dispo: string;
  debut_ind: string;
  fin_ind: string | null;
  motif_ind: string;
  geo_shape: GeoShape;
  geo_point_2d: GeoPoint2D;
}
