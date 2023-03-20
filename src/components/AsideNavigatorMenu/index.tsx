import { Code, House } from "phosphor-react";
import { SwitchButton } from "../../components/SwitchButton";
import { scrollPage } from "../../helpers/scrollPage";

import "../../styles/aside-navigator-menu.scss";

interface AsideNavigatorMenuProps {
  synthaveMode: boolean;
  setSynthwaveMode: (synthaveMode: boolean) => void;
}

export function AsideNavigatorMenu({
  synthaveMode,
  setSynthwaveMode,
}: AsideNavigatorMenuProps) {
  function handleChangeMode() {
    if (!synthaveMode) {
      setSynthwaveMode(true);
    } else {
      setSynthwaveMode(false);
    }
  }

  return (
    <aside
      id="aside-navigator-menu"
      className="aside-navigator-menu"
      aria-label="Menu de navegação lateral"
    >
      <div className="controls">
        <SwitchButton action={handleChangeMode} />
      </div>
      <nav>
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
