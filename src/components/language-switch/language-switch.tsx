import { useTranslation } from "react-i18next";
import { useEffect, useRef, useState } from "react";
import "./language-switch.scss";

interface LanguageProps {
  key: string;
  translationKey: string;
}

const languages = [
  { key: "fr-FR", translationKey: "languages.fr" },
  { key: "en-US", translationKey: "languages.en" },
  { key: "es", translationKey: "languages.es" },
];

const LanguageSwitch = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    const language = languages.find(
      (language: LanguageProps) => language.key === lng
    );
    if (language) {
      setActiveLanguage(language);
    }
    setShowOptions(!showOptions);
  };

  const [activeLanguage, setActiveLanguage] = useState<LanguageProps>(
    languages[0]
  );

  const [showOptions, setShowOptions] = useState(false);

  const languageOptionsRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target;
    if (
      target instanceof Node &&
      languageOptionsRef.current &&
      !languageOptionsRef.current.contains(target)
    ) {
      setShowOptions(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const renderLanguageOptions = (language: LanguageProps) => (
    <button
      className="language-switch__option"
      onClick={() => changeLanguage(language.key)}
    >
      <p className="language-switch__option-label">
        {t(language.translationKey)}
      </p>

      <img
        src={`/assets/icons/icon-${language.key}.svg`}
        alt={`icon-${language.key}`}
      />
    </button>
  );

  return (
    <div className="language-switch">
      <button
        className="language-switch__selected-option"
        onClick={() => setShowOptions(!showOptions)}
      >
        <p className="language-switch__option-label">
          {t(activeLanguage.translationKey)}
        </p>

        <img
          src={`/assets/icons/icon-${activeLanguage.key}.svg`}
          alt={`icon-${activeLanguage.key}`}
        />
      </button>

      {showOptions && (
        <div ref={languageOptionsRef} className="language-switch__options">
          {languages.map(renderLanguageOptions)}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitch;
