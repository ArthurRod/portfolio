import { useEffect, useState } from "react";

import { Info } from "../../types/Info";
import { getInfo } from "../../helpers/getInfo";
import { scrollAnimateElements } from "../../helpers/scrollAnimateElements";
import { Resume } from "../../components/Resume";
import { Skills } from "../../components/Skills";
import { AsideNavigatorMenu } from "../../components/AsideNavigatorMenu";

import "../../styles/landing-page.scss";

export function LandingPage() {
  const [synthaveMode, setSynthwaveMode] = useState(false);
  const [info, setInfo] = useState<Info>();

  useEffect(() => {
    getInfo("./src/data/infos.json", setInfo);
    scrollAnimateElements();
  }, []);

  if (!info) return null;

  return (
    <main
      id="landing-page"
      className={`landing-page ${synthaveMode ? "synthwavemode" : ""}`}
    >
      <AsideNavigatorMenu
        synthaveMode={synthaveMode}
        setSynthwaveMode={setSynthwaveMode}
      />
      <Resume resume={info.resume} />
      <Skills skills={info.skills} />
    </main>
  );
}
