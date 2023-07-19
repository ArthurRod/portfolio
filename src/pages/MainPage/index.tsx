import { useEffect, useState } from "react";

import { Info } from "../../types/Info";
import { scrollAnimateElements } from "../../helpers/scroll";
import { toggleDarkMode } from "../../helpers/toggleDarkMode";
import { AsideNavigatorMenu } from "../../components/AsideNavigatorMenu";
import { LanguageSelector } from "../../components/LanguageSelector";
import { Resume } from "../../components/Resume";
import { About } from "../../components/About";
import { Skills } from "../../components/Skills";
import Projects from "../../components/Projects";
import { Contact } from "../../components/Contact";
import { Footer } from "../../components/Footer";

export function MainPage() {
  const [info, setInfo] = useState<Info | null>(null);

  useEffect(() => {
    getInfo();
    scrollAnimateElements();
    toggleDarkMode();
  }, []);

  async function getInfo() {
    try {
      const response = await fetch("./src/data/infos.json", {
        headers: {
          Accept: "application/json",
        },
      });
      const data = await response.json();
      setInfo(data);
    } catch (error) {
      console.log(error);
    }
  }

  if (!info) {
    return null;
  }

  return (
    <>
      <main id="main-page" className="main-page">
        <AsideNavigatorMenu />
        <LanguageSelector />
        <Resume resume={info.resume} />
        <About about={info.about} />
        <Skills skills={info.skills} />
        <Projects projects={info.projects} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
