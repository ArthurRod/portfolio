import { Code, House, Moon, User } from "phosphor-react";

import { scrollPage } from "../../helpers/onScroll";
import { SwitchButton } from "../../components/SwitchButton";

import "../../styles/aside-navigator-menu.scss";

interface AsideNavigatorMenuProps {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
}

export function AsideNavigatorMenu({
  darkMode,
  setDarkMode,
}: AsideNavigatorMenuProps) {
  function handleDarkMode() {
    if (!darkMode) {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }

  return (
    <aside
      id="aside-navigator-menu"
      className="aside-navigator-menu"
      aria-label="Menu de navegação lateral"
    >
      <div className="controls">
        <div className="dark-mode" aria-label="Ativar modo noturno">
          <Moon size={32} />
          <SwitchButton action={handleDarkMode} />
        </div>
      </div>
      <nav aria-label="Menus">
        <ul>
          <li aria-label="Menu resumo">
            <a href="#resume" onClick={() => scrollPage("resume")}>
              <House size={32} />
              <div className="menu-name" aria-label="Nome do menu">
                <div className="content">
                  <span>Resumo</span>
                </div>
              </div>
            </a>
          </li>
          <li aria-label="Menu sobre mim">
            <a href="#about" onClick={() => scrollPage("about")}>
              <User size={32} />
              <div className="menu-name" aria-label="Nome do menu">
                <div className="content">
                  <span>Sobre mim</span>
                </div>
              </div>
            </a>
          </li>
          <li aria-label="Menu habilidades">
            <a href="#skills" onClick={() => scrollPage("skills")}>
              <Code size={32} />
              <div className="menu-name" aria-label="Nome do menu">
                <div className="content">
                  <span>Habilidades</span>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
