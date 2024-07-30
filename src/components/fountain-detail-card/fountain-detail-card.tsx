import { Dispatch, FC, SetStateAction } from "react";
import { useTranslation } from "react-i18next";
import "./fountain-detail-card.scss";

interface FountainDetailCardProps {
  title?: string;
  imageUrl: string;
  address: string;
  available: boolean;
  setShowFontaine: Dispatch<SetStateAction<boolean>>;
}

const FountainDetailCard: FC<FountainDetailCardProps> = ({
  title,
  imageUrl,
  address,
  available,
  setShowFontaine,
}) => {
  const { t } = useTranslation();

  const availableText = available ? (
    <p className="fountain-detail-card__available">
      {t("detail-card.available")}
    </p>
  ) : (
    <p className="fountain-detail-card__unavailable">
      {t("detail-card.unavailable")}
    </p>
  );

  return (
    <div className="fountain-detail-card">
      <div className="fountain-detail-card__content">
        <img
          className="fountain-detail-card__image"
          src={`/assets/images/${imageUrl}.jpg`}
          alt={`image ${title}`}
        />

        <div className="fountain-detail-card__infos">
          <p className="fountain-detail-card__title">{title ?? "Fontaine"}</p>

          <p className="fountain-detail-card__address">{address}</p>

          {availableText}
        </div>
      </div>

      <img
        className="fountain-detail-card__cross"
        src="/assets/icons/icon-cross.svg"
        alt="icon close"
        onClick={() => setShowFontaine(false)}
      />
    </div>
  );
};

export default FountainDetailCard;
