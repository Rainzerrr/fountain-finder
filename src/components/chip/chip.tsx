import { FC } from "react";
import "./chip.scss";
import classNames from "classnames";

interface ChipProps {
  className?: string;
  id?: number;
  label: string;
  selected: boolean;
  onClick: () => unknown;
}

const Chip: FC<ChipProps> = ({ label, selected, className, onClick }) => {
  return (
    <button
      className={classNames("chip", selected && "chip--selected", className)}
      onClick={onClick}
    >
      <p className="chip__label">{label}</p>

      {selected && <img src="/assets/icons/icon-cancel.svg" alt="icon cross" />}
    </button>
  );
};

export default Chip;
