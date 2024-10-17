import LanguageSwitch from "../language-switch/language-switch";
import "./header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="header__logo-wrapper">
        <img className="header__logo" src="/assets/logo.svg" alt="logo" />
      </div>
      {/* 
      <ul className="header__links">
        <li className="header__link">
          <a href="/" className="header__link-label">
            {t("header.home")}
          </a>
        </li>

        <li className="header__link">
          <a href="/decouvrir" className="header__link-label">
            {t("header.discover")}
          </a>
        </li>

        <li className="header__link">
          <a href="/contact" className="header__link-label">
            {t("header.contact")}
          </a>
        </li>
      </ul> */}

      <div className="header__user-buttons">
        {/* <Button label={t("user.sign-up")} variant="contained" />

        <Button label={t("user.login")} variant="outlined" /> */}

        <LanguageSwitch />
      </div>
    </div>
  );
};

export default Header;
