import { SocialMedia } from "../../../types/SocialMedia";

import "./social-medias.scss";

interface SocialMediasProps {
  socialMedias: SocialMedia[];
}

export function SocialMedias({ socialMedias }: SocialMediasProps) {
  return (
    <ul className="social-medias" aria-label="Mídias Sociais">
      {socialMedias.map((socialMedia, index) => {
        const { name, icon, link } = socialMedia;
        return (
          <li key={index} className="social-media" aria-label={name}>
            <a
              target="_blank"
              href={link}
              rel="noopener noreferrer"
              aria-label={name}
            >
              <img src={icon} width={32} alt={name} />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
