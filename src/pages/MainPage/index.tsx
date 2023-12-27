import { useEffect, useState } from "react";

import { Info } from "../../types/Info";
import { scrollAnimateElements } from "../../helpers/scroll";
import { toggleDarkMode } from "../../helpers/toggleDarkMode";

import { AsideNavigatorMenu, LanguageSelector, Footer } from "../../components";
import { Resume, About, Skills, ProjectsVtex, Contact } from "../../containers";

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
      <AsideNavigatorMenu />
      <main className="main-page">
        <LanguageSelector />
        <Resume resume={info.resume} />
        <About about={info.about} />
        <Skills skills={info.skills} />
        <ProjectsVtex projectsVtex={info.projectsVtex} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
