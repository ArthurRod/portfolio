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

  const handleMenuKeyDown = (e: React.KeyboardEvent, section: string) => {
    if (e.key === "Enter") {
      e.preventDefault();
      scrollPage(section);
    }
  };

  const menuItemData = [
    {
      section: "resume",
      icon: <House size={32} />,
      textKey: "menuTexts.resume",
    },
    { section: "about", icon: <User size={32} />, textKey: "menuTexts.about" },
    {
      section: "skills",
      icon: <Code size={32} />,
      textKey: "menuTexts.skills",
    },
    {
      section: "projects",
      icon: <Palette size={32} />,
      textKey: "menuTexts.projects",
    },
    {
      section: "contact",
      icon: <Phone size={32} />,
      textKey: "menuTexts.contact",
    },
  ];

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
          {menuItemData.map((item, index) => (
            <li key={index}>
              <a
                onClick={() => handleMenuClick(item.section)}
                onKeyDown={(e) => handleMenuKeyDown(e, item.section)}
                role="button"
                tabIndex={1}
                aria-label={`Menu ${item.section}`}
              >
                {item.icon}
                <span>{t(item.textKey)}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
