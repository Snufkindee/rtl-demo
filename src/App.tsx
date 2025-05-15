import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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
      <header className="bg-accent-foreground border-b border-border pl-4 py-2">
        <div className="flex">
          <div className="w-full flex gap-4">
            <h1 className="text-3xl font-bold text-white">N & E</h1>
            <p className="self-center text-sm text-primary">
              {t("site_description")}
            </p>
          </div>

          <div className="text-sm flex flex-row">
            <div className="mr-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="default">{t("menu")}</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      Ninni
                      <DropdownMenuShortcut>⌘N</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      Eino
                      <DropdownMenuShortcut>⌘E</DropdownMenuShortcut>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      {t("share")}
                      <DropdownMenuShortcut>⌘+S</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>{t("about")}</DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>GitHub</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
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
                Ninni is a 2 year old cat that likes to eat everything and
                unfortunately everything that is made from plastic. <br />
                She is a bit smaller than Eino but despite that much louder and
                active. <br />
                She is very vocal and social and let's you know if the food bowl
                is empty.
              </p>
            </div>
          </Card>
          <Card className="flex px-4 flex-row-reverse justify-evenly gap-4">
            <img src={eino} className="max-h-100 max-w-100 rounded-3xl" />

            <div className="flex flex-col justify-center gap-0.5">
              <h2 className="text-2xl font-bold">Eino</h2>
              <p>
                Eino is a 5 year old cat. Fetching toys and eating popcorn is
                Eino's expertise.
                <br />
                He always watches and follows around Ninni to make sure that
                she's fine whether Ninni likes it or not.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}

export default App;
