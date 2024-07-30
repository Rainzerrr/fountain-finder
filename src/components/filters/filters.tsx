import { Trans } from "react-i18next";
import { useTranslation } from "react-i18next";
import Availability from "./components/availability/availability";
import Districts from "./components/districts/districts";
import Button from "../button/button";
import Types from "./components/types/types";
import { FC } from "react";
import { filtersProps } from "../../pages/homepage/homepage";
import { fontaineType } from "../map-view/custom-marker-config";
import "./filters.scss";

interface FiltersProps {
  filters: filtersProps;
  handleAvailabilityChange: (filter: string) => void;
  handleFountainTypeChange: (type: fontaineType) => void;
  handleDistrictChange: (district: string) => void;
  resetFilters: () => void;
}

const Filters: FC<FiltersProps> = ({
  filters,
  handleAvailabilityChange,
  handleFountainTypeChange,
  handleDistrictChange,
  resetFilters,
}) => {
  const { t } = useTranslation();

  return (
    <div className="filters">
      <Trans parent="p" i18nKey={"filters.title"} className="filters__title" />

      <div className="filters__section">
        <Availability
          handleAvailabilityChange={handleAvailabilityChange}
          filters={filters}
        />

        <Districts
          filters={filters}
          handleDistrictChange={handleDistrictChange}
        />

        <Types
          filters={filters}
          handleFountainTypeChange={handleFountainTypeChange}
        />

        <div className="filters__buttons">
          <Button
            variant="contained"
            label={t("filters.buttons.apply")}
            full_width
          />

          <Button
            variant="outlined"
            label={t("filters.buttons.reset")}
            full_width
            onClick={resetFilters}
          />
        </div>
      </div>
    </div>
  );
};

export default Filters;
