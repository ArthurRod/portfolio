import { useEffect, useState } from "react";

import { Info } from "../../types/Info";
import { getInfo } from "../../helpers/getInfo";
import { SkillsCarousel } from "../../components/SkillsCarousel";
import { OuterCarousel } from "../../components/OuterCarousel";

export function LandingPage() {
  const [info, setInfo] = useState<Info>();

  useEffect(() => {
    getInfo("./src/data/infos.json", setInfo);
  }, []);

  if (!info) return null;

  return (
    <main id="landing-page" className="landing-page">
      <OuterCarousel>
        <SkillsCarousel skills={info.skills} />
        <h3>Teste</h3>
      </OuterCarousel>
    </main>
  );
}
