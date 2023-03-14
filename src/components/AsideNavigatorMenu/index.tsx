import { SwitchButton } from "../../components/SwitchButton";

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
          <li>
            <a href="#skills">Habilidades</a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
