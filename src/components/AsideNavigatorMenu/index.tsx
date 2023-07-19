import { Code, House, Moon, User, Palette, Phone } from "phosphor-react";
import { useTranslation } from "react-i18next";
import { scrollPage } from "../../helpers/scroll";
import { toggleDarkMode } from "../../helpers/toggleDarkMode";
import { SwitchButton } from "../../components/SwitchButton";
import "../../styles/aside-navigator-menu.scss";

export function AsideNavigatorMenu() {
  const { t } = useTranslation();

  const handleMenuClick = (section: string) => {
    scrollPage(section);
  };

  return (
    <aside
      id="aside-navigator-menu"
      className="aside-navigator-menu"
      tabIndex={0}
      aria-label="Menu de navegação lateral"
    >
      <div className="controls">
        <div
          className="dark-mode-switch-button"
          aria-label="Ativar modo noturno"
        >
          <Moon size={32} />
          <SwitchButton action={toggleDarkMode} />
        </div>
      </div>
      <nav aria-label="Menus">
        <ul>
          <li>
            <a
              onClick={() => handleMenuClick("resume")}
              onKeyDown={() => handleMenuClick("resume")}
              role="button"
              tabIndex={1}
              aria-label="Menu resumo"
            >
              <House size={32} />
              <span>{t("menuTexts.resume")}</span>
            </a>
          </li>
          <li>
            <a
              onClick={() => handleMenuClick("about")}
              onKeyDown={() => handleMenuClick("about")}
              role="button"
              tabIndex={1}
              aria-label="Menu sobre mim"
            >
              <User size={32} />
              <span>{t("menuTexts.about")}</span>
            </a>
          </li>
          <li>
            <a
              onClick={() => handleMenuClick("skills")}
              onKeyDown={() => handleMenuClick("skills")}
              role="button"
              tabIndex={1}
              aria-label="Menu habilidades"
            >
              <Code size={32} />
              <span>{t("menuTexts.skills")}</span>
            </a>
          </li>
          <li>
            <a
              onClick={() => handleMenuClick("projects")}
              onKeyDown={() => handleMenuClick("projects")}
              role="button"
              tabIndex={1}
              aria-label="Menu projetos"
            >
              <Palette size={32} />
              <span>{t("menuTexts.projects")}</span>
            </a>
          </li>
          <li>
            <a
              onClick={() => handleMenuClick("contact")}
              onKeyDown={() => handleMenuClick("contact")}
              role="button"
              tabIndex={1}
              aria-label="Menu contato"
            >
              <Phone size={32} />
              <span>{t("menuTexts.contact")}</span>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
