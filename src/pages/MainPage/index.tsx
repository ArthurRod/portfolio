import { useEffect, useState } from "react";
import { Info } from "../../types/Info";
import { scrollAnimateElements } from "../../helpers/onScroll";
import { activateDarkMode } from "../../helpers/activateDarkMode";
import { AsideNavigatorMenu } from "../../components/AsideNavigatorMenu";
import { Resume } from "../../components/Resume";
import { About } from "../../components/About";
import { Skills } from "../../components/Skills";
import Projects from "../../components/Projects";
import { Contact } from "../../components/Contact";

export function MainPage() {
  const [info, setInfo] = useState<Info | null>(null);

  useEffect(() => {
    getInfo();
    scrollAnimateElements();
    activateDarkMode();
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
    <main id="main-page" className="main-page">
      <AsideNavigatorMenu />
      <Resume resume={info.resume} />
      <About about={info.about} />
      <Skills skills={info.skills} />
      <Projects projects={info.projects} />
      <Contact />
    </main>
  );
}