import { ResumeType } from "./ResumeType";
import { AboutType } from "./AboutType";
import { Skill } from "./Skill";
import { Project } from "./Project";

export type Info = {
  resume: ResumeType;
  about: AboutType;
  skills: Skill[];
  projects: Project[];
};
