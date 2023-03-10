import { useEffect, useState } from "react";

import { Info } from "../../types/Info";
import { getInfo } from "../../helpers/getInfo";
import { scrollAnimateElements } from "../../helpers/scrollAnimateElements";
import { Resume } from "../../components/Resume";
import { Skills } from "../../components/Skills";

export function LandingPage() {
  const [info, setInfo] = useState<Info>();

  useEffect(() => {
    getInfo("./src/data/infos.json", setInfo);
    scrollAnimateElements();
  }, []);

  if (!info) return null;

  return (
    <main id="landing-page" className="landing-page">
      <Resume resume={info.resume} />
      <Skills skills={info.skills} />
    </main>
  );
}
