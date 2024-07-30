import { Fontaine } from "../../types";

const formatFountainAddress = (data: Fontaine) => {
  const voie = data.voie;
  const noVoiriePair = data.no_voirie_pair;
  const noVoirieImpair = data.no_voirie_impair;
  const commune = data.commune;

  const noVoirie = noVoiriePair !== null ? noVoiriePair : noVoirieImpair;

  const adresse = (noVoirie ?? "") + " " + voie + ", " + commune;

  // Fonction pour mettre en minuscule sauf la première lettre de chaque mot
  const capitalizeFirstLetter = (str: string) => {
    return str
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return capitalizeFirstLetter(adresse);
};

export { formatFountainAddress };
