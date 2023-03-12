import * as Switch from "@radix-ui/react-switch";

import "../../styles/switch-button.scss";

interface SwitchButtonProps {
  action: () => void;
}

export function SwitchButton({ action }: SwitchButtonProps) {
  return (
    <Switch.Root onCheckedChange={action} className="switch-button">
      <Switch.Thumb />
    </Switch.Root>
  );
}
