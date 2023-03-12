import { useEffect, useState } from "react";

import { Info } from "../../types/Info";
import { getInfo } from "../../helpers/getInfo";
import { scrollAnimateElements } from "../../helpers/scrollAnimateElements";
import { Resume } from "../../components/Resume";
import { Skills } from "../../components/Skills";
import { SwitchButton } from "../../components/SwitchButton";

import "../../styles/landing-page.scss";

export function LandingPage() {
  const [info, setInfo] = useState<Info>();
  const [synthaveMode, setSynthwaveMode] = useState(false);

  useEffect(() => {
    getInfo("./src/data/infos.json", setInfo);
    scrollAnimateElements();
  }, []);

  function handleChangeMode() {
    if (!synthaveMode) {
      setSynthwaveMode(true);
    } else {
      setSynthwaveMode(false);
    }
  }

  if (!info) return null;

  return (
    <main
      id="landing-page"
      className={`landing-page ${synthaveMode ? "synthwavemode" : ""}`}
    >
      <SwitchButton action={handleChangeMode} />
      <Resume resume={info.resume} />
      <Skills skills={info.skills} />
    </main>
  );
}
