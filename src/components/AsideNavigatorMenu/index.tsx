import { Code, House, Moon, User, Palette, Phone } from "phosphor-react";
import { useTranslation } from "react-i18next";

import { scrollPage } from "../../helpers/onScroll";
import { activateDarkMode } from "../../helpers/activateDarkMode";
import { SwitchButton } from "../../components/SwitchButton";

import "../../styles/aside-navigator-menu.scss";

export function AsideNavigatorMenu() {
  const { t } = useTranslation();

  return (
    <aside
      id="aside-navigator-menu"
      className="aside-navigator-menu"
      aria-label="Menu de navegação lateral"
    >
      <div className="controls">
        <div
          className="dark-mode-switch-button"
          aria-label="Ativar modo noturno"
        >
          <Moon size={32} />
          <SwitchButton action={activateDarkMode} />
        </div>
      </div>
      <nav aria-label="Menus">
        <ul>
          <li aria-label="Menu resumo">
            <a onClick={() => scrollPage("resume")}>
              <House size={32} />
              <div className="menu-name" aria-label="Nome do menu">
                <div className="content">
                  <span>{t("menuTexts.resume")}</span>
                </div>
              </div>
            </a>
          </li>
          <li aria-label="Menu sobre mim">
            <a onClick={() => scrollPage("about")}>
              <User size={32} />
              <div className="menu-name" aria-label="Nome do menu">
                <div className="content">
                  <span>{t("menuTexts.about")}</span>
                </div>
              </div>
            </a>
          </li>
          <li aria-label="Menu habilidades">
            <a onClick={() => scrollPage("skills")}>
              <Code size={32} />
              <div className="menu-name" aria-label="Nome do menu">
                <div className="content">
                  <span>{t("menuTexts.skills")}</span>
                </div>
              </div>
            </a>
          </li>
          <li aria-label="Menu projetos">
            <a onClick={() => scrollPage("projects")}>
              <Palette size={32} />
              <div className="menu-name" aria-label="Nome do menu">
                <div className="content">
                  <span>{t("menuTexts.projects")}</span>
                </div>
              </div>
            </a>
          </li>
          <li aria-label="Menu contato">
            <a onClick={() => scrollPage("contact")}>
              <Phone size={32} />
              <div className="menu-name" aria-label="Nome do menu">
                <div className="content">
                  <span>{t("menuTexts.contact")}</span>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
