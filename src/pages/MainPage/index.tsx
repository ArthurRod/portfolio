import { useEffect, useState } from "react";

import { Info } from "../../types/Info";
import { scrollAnimateElements } from "../../helpers/scroll";
import { toggleDarkMode } from "../../helpers/toggleDarkMode";

import {
  AsideNavigatorMenu,
  LanguageSelector,
  Footer,
  Loading,
} from "../../components";
import {
  Resume,
  About,
  Skills,
  ProjectsVtex,
  Contact,
  NotInfos,
} from "../../containers";

export function MainPage() {
  const [infos, setInfos] = useState<Info | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getInfos();
    scrollAnimateElements();
    toggleDarkMode();
  }, []);

  async function getInfos() {
    try {
      setLoading(true);
      const response = await fetch("./src/data/infos.json");
      const data = await response.json();

      setInfos(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <>
        <AsideNavigatorMenu />
        <main className="main-page">
          <div className="center-total">
            <Loading />
          </div>
        </main>
        <Footer />
      </>
    );
  }

  if (!infos) {
    return (
      <>
        <AsideNavigatorMenu />
        <main className="main-page">
          <NotInfos />
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <AsideNavigatorMenu />
      <main className="main-page">
        <LanguageSelector />
        <Resume resume={infos.resume} />
        <About about={infos.about} />
        <Skills skills={infos.skills} />
        <ProjectsVtex projectsVtex={infos.projectsVtex} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
