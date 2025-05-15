import { useState } from "react";
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

  return (
    <>
      <header className="border-b border-border pl-4 py-2">
        <div className="flex">
          <div className="w-full flex gap-4">
            <h1 className="text-3xl font-bold">N & E</h1>
            <p className="self-center text-sm">Quick RTL language demo</p>
          </div>

          <div className="text-sm flex flex-row">
            <Button variant="ghost" onClick={() => handleChangeLanguage("en")}>
              EN
            </Button>
            <Separator orientation="vertical" className="w-1/2" />
            <Button variant="ghost" onClick={() => handleChangeLanguage("fa")}>
              FA
            </Button>
          </div>
        </div>
      </header>

      <div className="flex flex-col px-24 gap-4">
        <h1 className="self-center text-2xl font-bold mt-4 text-foreground">
          {t("title")}
        </h1>
        <p className="self-center">
          Ninni and Eino are Oriental shorhair cats that love to sleep and play
          together
        </p>

        <div className="flex flex-col gap-6">
          <Card className="flex flex-row justify-evenly">
            <img src={ninni} className="max-h-100 max-w-90 rounded-3xl" />
            <div className="flex flex-col justify-center gap-0.5">
              <h2 className="text-2xl font-bold">Ninni</h2>
              <p>
                Ninni is a 2 year old cat that likes to eat everything
                especially everything that is plastic.
              </p>
            </div>
          </Card>
          <Card className="flex px-4 flex-row-reverse justify-evenly gap-4">
            <img src={eino} className="max-h-100 max-w-100 rounded-3xl" />

            <div className="flex flex-col justify-center gap-0.5">
              <h2 className="text-2xl font-bold">Eino</h2>
              <p>
                Eino is a 5 year old cat that likes to fetch toys and chew on
                some rope.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}

export default App;
