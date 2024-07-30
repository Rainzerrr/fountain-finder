import { Trans } from "react-i18next";
import "./districts.scss";
import Chip from "../../../chip/chip";
import { filtersProps } from "../../../../pages/homepage/homepage";
import { FC } from "react";

interface DistrictsProps {
  filters: filtersProps;
  handleDistrictChange: (district: string) => void;
}

const Districts: FC<DistrictsProps> = ({ filters, handleDistrictChange }) => {
  const districts_buttons = () =>
    Array.from({ length: 20 }, (_, i) => (
      <Chip
        key={i + 1}
        label={`${i + 1}`}
        onClick={() => handleDistrictChange(`PARIS ${i + 1}E`)}
        selected={isDistrictFilterSelected(`PARIS ${i + 1}E`)}
      />
    ));

  const isDistrictFilterSelected = (district: string) => {
    return filters.districts.includes(district);
  };

  return (
    <div className="districts">
      <Trans
        parent="p"
        i18nKey={"filters.districts.title"}
        className="districts__title"
      />

      <div className="districts__buttons">{districts_buttons()}</div>
    </div>
  );
};

export default Districts;
