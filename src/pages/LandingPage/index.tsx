import { useEffect, useState } from "react";
import { Skill } from "../../types/Skill";
import { Carousel } from "../../components/Carousel";
import { CarouselItem } from "../../components/Carousel/CarouselItem";
import { getSkills } from "../../helpers/getSkills";

export function LandingPage() {
  const [skills, setSkills] = useState<Skill[]>([]);

  useEffect(() => {
    getSkills("./src/data/skills.json", setSkills);
  }, []);

  if (!skills || skills.length === 0) return null;

  return (
    <main id="landing-page" className="landing-page">
      <Carousel>
        {skills.map((skill: Skill, i: number) => (
          <CarouselItem key={i} width={33.3}>
            <span>{skill.name}</span>
          </CarouselItem>
        ))}
      </Carousel>
    </main>
  );
}
