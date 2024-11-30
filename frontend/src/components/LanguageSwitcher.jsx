import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const handleChangeLanguage = (lng) => {
    i18n.changeLanguage(lng);

    document.body.style.backgroundColor = getBackgroundColor(lng);
  };

  const getBackgroundColor = (lng) => {
    switch (lng) {
      case "hi":
        return "#EEFAFC";
      case "zh":
        return "#ecfdf5";
      case "fr":
        return "#fefce8";
      default:
        return "white";
    }
  };

  return (
    <div>
      <button onClick={() => handleChangeLanguage("en")}>English</button>
      <button onClick={() => handleChangeLanguage("es")}>Spanish</button>
      <button onClick={() => handleChangeLanguage("hi")}>Hindi</button>
      <button onClick={() => handleChangeLanguage("pt")}>Portuguese</button>
      <button onClick={() => handleChangeLanguage("zh")}>Chinese</button>
      <button onClick={() => handleChangeLanguage("fr")}>French</button>
    </div>
  );
};

export default LanguageSwitcher;
