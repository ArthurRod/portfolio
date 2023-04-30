import { ResumeType } from "./ResumeType";
import { AboutType } from "./AboutType";
import { Skill } from "./Skill";

export type Info = {
  resume: ResumeType;
  about: AboutType;
  skills: Skill[];
};
