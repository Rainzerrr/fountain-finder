import { Trans, useTranslation } from "react-i18next";
import "./availability.scss";
import Chip from "../../../chip/chip";
import { FC } from "react";
import { filtersProps } from "../../../../pages/homepage/homepage";

interface AvailabilityProps {
  filters: filtersProps;
  handleAvailabilityChange: (filter: string) => void;
}

const Availability: FC<AvailabilityProps> = ({
  filters,
  handleAvailabilityChange,
}) => {
  const { t } = useTranslation();
  return (
    <div className="availability">
      <Trans
        parent="p"
        i18nKey={"filters.availability.title"}
        className="availability__title"
      />

      <div className="availability__buttons">
        <Chip
          label={t("filters.availability.buttons.available")}
          selected={filters.availability.includes("Disponible")}
          onClick={() => handleAvailabilityChange("Disponible")}
        />
        <Chip
          label={t("filters.availability.buttons.unavailable")}
          selected={filters.availability.includes("Indisponible")}
          onClick={() => handleAvailabilityChange("Indisponible")}
        />
      </div>
    </div>
  );
};

export default Availability;
