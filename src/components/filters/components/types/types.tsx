import { useTranslation } from "react-i18next";
import Chip from "../../../chip/chip";
import { filtersProps } from "../../../../pages/homepage/homepage";
import { FC } from "react";
import "./types.scss";
import { fontaineType } from "../../../map-view/custom-marker-config";

interface FountainTypesProps {
  filters: filtersProps;
  handleFountainTypeChange: (filter: fontaineType) => void;
}

const Types: FC<FountainTypesProps> = ({
  filters,
  handleFountainTypeChange,
}) => {
  const { t } = useTranslation();

  const isFountainTypeFilterSelected = (type: fontaineType) => {
    return filters.fountainTypes.includes(type);
  };

  return (
    <div className="types">
      <p className="types__title">{t("filters.types.title")}</p>

      <div className="types__chips">
        <Chip
          label={t("filters.types.wallace")}
          selected={isFountainTypeFilterSelected("FONTNE_WALLACE")}
          onClick={() => handleFountainTypeChange("FONTNE_WALLACE")}
        />

        <Chip
          label={t("filters.types.mat_source")}
          selected={isFountainTypeFilterSelected("FONTAINE_2EN1")}
          onClick={() => handleFountainTypeChange("FONTAINE_2EN1")}
        />

        <Chip
          label={t("filters.types.albien")}
          selected={isFountainTypeFilterSelected("FONTAINE_ALBIEN")}
          onClick={() => handleFountainTypeChange("FONTAINE_ALBIEN")}
        />

        <Chip
          label={t("filters.types.totem")}
          selected={isFountainTypeFilterSelected("FONTAINE_TOTEM")}
          onClick={() => handleFountainTypeChange("FONTAINE_TOTEM")}
        />

        <Chip
          label={t("filters.types.arceau")}
          selected={isFountainTypeFilterSelected("FONTAINE_ARCEAU")}
          onClick={() => handleFountainTypeChange("FONTAINE_ARCEAU")}
        />

        <Chip
          label={t("filters.types.petillant")}
          selected={isFountainTypeFilterSelected("FTNE_PETILLANTE")}
          onClick={() => handleFountainTypeChange("FTNE_PETILLANTE")}
        />

        <Chip
          label={t("filters.types.poing_eau")}
          selected={isFountainTypeFilterSelected("FTNE_POING_EAU")}
          onClick={() => handleFountainTypeChange("FTNE_POING_EAU")}
        />

        <Chip
          label={t("filters.types.millenaire")}
          selected={isFountainTypeFilterSelected("FTNE_MILLENAIRE")}
          onClick={() => handleFountainTypeChange("FTNE_MILLENAIRE")}
        />

        <Chip
          label={t("filters.types.fountain_borne")}
          selected={isFountainTypeFilterSelected("BORNE_FONTAINE")}
          onClick={() => handleFountainTypeChange("BORNE_FONTAINE")}
        />

        <Chip
          label={t("filters.types.fountain_bois")}
          selected={isFountainTypeFilterSelected("FONTAINE_BOIS")}
          onClick={() => handleFountainTypeChange("FONTAINE_BOIS")}
        />
      </div>
    </div>
  );
};

export default Types;
