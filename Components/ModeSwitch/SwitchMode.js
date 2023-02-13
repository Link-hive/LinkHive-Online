import { useTheme as useNextTheme } from "next-themes";
import { Switch, useTheme } from "@nextui-org/react";

const ModeSwitch = () => {
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();

  return (
      <Switch
        checked={isDark}
        color={"secondary"}
        onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
      />
  );
};

export default ModeSwitch;
