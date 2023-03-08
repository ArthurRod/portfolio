import { useEffect, useState } from "react";

import { Info } from "../../types/Info";
import { getInfo } from "../../helpers/getInfo";
import { SkillsCarousel } from "../../components/SkillsCarousel";

export function LandingPage() {
  const [info, setInfo] = useState<Info>();

  useEffect(() => {
    getInfo("./src/data/infos.json", setInfo);
  }, []);

  if (!info) return null;

  return (
    <main id="landing-page" className="landing-page">
      <SkillsCarousel skills={info.skills} />
    </main>
  );
}
