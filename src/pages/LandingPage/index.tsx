import { useEffect, useState } from "react";

import { Info } from "../../types/Info";
import { getInfo } from "../../helpers/getInfo";
import { scrollAnimateElements } from "../../helpers/onScroll";
import { Resume } from "../../components/Resume";
import { Skills } from "../../components/Skills";
import { AsideNavigatorMenu } from "../../components/AsideNavigatorMenu";

import "../../styles/landing-page.scss";
import { About } from "../../components/About";

export function LandingPage() {
  const [darkMode, setDarkMode] = useState(false);
  const [info, setInfo] = useState<Info>();

  useEffect(() => {
    getInfo("./src/data/infos.json", setInfo);
    scrollAnimateElements();
  }, []);

  if (!info) return null;

  return (
    <main
      id="landing-page"
      className={`landing-page ${darkMode ? "dark-mode" : ""}`}
    >
      <AsideNavigatorMenu darkMode={darkMode} setDarkMode={setDarkMode} />
      <Resume resume={info.resume} />
      <About about={info.about} />
      <Skills skills={info.skills} />
    </main>
  );
}
