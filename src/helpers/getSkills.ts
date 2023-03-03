import { Skill } from "../types/Skill";

export function getSkills(path: string, setSkills: (skills: Skill[]) => void) {
  fetch(path, {
    headers: {
      Accept: "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => {
      const skillsArray = res.skills;

      setSkills(skillsArray);
    })
    .catch((error) => console.log(error));
}
