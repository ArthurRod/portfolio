import { Code, House, Moon, User, Palette, Phone } from "phosphor-react";

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
            <a onClick={() => scrollPage("resume")}>
              <House size={32} />
              <div className="menu-name" aria-label="Nome do menu">
                <div className="content">
                  <span>Resumo</span>
                </div>
              </div>
            </a>
          </li>
          <li aria-label="Menu sobre mim">
            <a onClick={() => scrollPage("about")}>
              <User size={32} />
              <div className="menu-name" aria-label="Nome do menu">
                <div className="content">
                  <span>Sobre mim</span>
                </div>
              </div>
            </a>
          </li>
          <li aria-label="Menu habilidades">
            <a onClick={() => scrollPage("skills")}>
              <Code size={32} />
              <div className="menu-name" aria-label="Nome do menu">
                <div className="content">
                  <span>Habilidades</span>
                </div>
              </div>
            </a>
          </li>
          <li aria-label="Menu projetos">
            <a onClick={() => scrollPage("projects")}>
              <Palette size={32} />
              <div className="menu-name" aria-label="Nome do menu">
                <div className="content">
                  <span>Projetos</span>
                </div>
              </div>
            </a>
          </li>
          <li aria-label="Menu contato">
            <a onClick={() => scrollPage("contact")}>
              <Phone size={32} />
              <div className="menu-name" aria-label="Nome do menu">
                <div className="content">
                  <span>Contato</span>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
