import i18n from "i18next";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "./App.css";
import eino from "./assets/Eino.jpg";
import ninni from "./assets/Ninni2.jpg";
import { Button } from "./components/ui/button";
import { Card } from "./components/ui/card";
import { Separator } from "./components/ui/separator";

function App() {
  const {
    t,
    i18n: { changeLanguage, language },
  } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(language);

  const handleChangeLanguage = (newLanguage: string) => {
    setCurrentLanguage(newLanguage);
    changeLanguage(newLanguage);
  };

  useEffect(() => {
    const dir = i18n.dir(i18n.language);
    document.documentElement.dir = dir;
  }, [i18n, i18n.language]);

  return (
    <>
      <header className="bg-accent-foreground border-b border-border ltr:pl-4 rtl:pr-4 py-2">
        <div className="flex">
          <div className="w-full flex gap-4">
            <h1 className="text-3xl font-bold text-white">N & E</h1>
            <p dir="ltr" className="self-center text-sm text-primary">
              {t("site_description")}
            </p>
          </div>

          <div className="text-sm flex flex-row">
            <Button
              variant="ghost"
              onClick={() => handleChangeLanguage("en")}
              className={`${
                currentLanguage === "en" ? "text-primary" : "text-white"
              }`}
            >
              {t("english")}
            </Button>
            <Separator orientation="vertical" className="w-1/2" />
            <Button
              variant="ghost"
              onClick={() => handleChangeLanguage("fa")}
              className={`${
                currentLanguage === "fa" ? "text-primary" : "text-white"
              }`}
            >
              {t("farsi")}
            </Button>
          </div>
        </div>
      </header>

      <div className="flex flex-col px-24 gap-4">
        <h1 className="self-center text-2xl font-bold mt-4 text-foreground">
          {t("title")}
        </h1>
        <p dir="ltr" className="self-center">
          {t("description")}
        </p>

        <div className="flex flex-col gap-6">
          <Card className="flex flex-row justify-evenly">
            <img src={ninni} className="max-h-100 max-w-90 rounded-3xl" />
            <div className="flex flex-col justify-center gap-0.5">
              <h2 className="text-2xl font-bold">{t("ninni")}</h2>
              <bdi className="w-3xl">{t("ninni_info")}</bdi>
            </div>
          </Card>
          <Card className="flex px-4 flex-row-reverse justify-evenly gap-4">
            <img src={eino} className="max-h-100 max-w-100 rounded-3xl" />

            <div className="flex flex-col justify-center gap-0.5">
              <h2 className="text-2xl font-bold">{t("eino")}</h2>
              <p className="w-3xl">{t("eino_info")}</p>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}

export default App;
