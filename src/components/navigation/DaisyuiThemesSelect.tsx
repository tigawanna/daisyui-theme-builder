import { useDaisyUITheme } from "../all-in-one-theme-editor/utils/use-search-params-theme";

export function DaisyuiThemesSelect() {
  const items = [
    "light",
    "dark",
    "cupcake",
    "bumblebee",
    "emerald",
    "corporate",
    "synthwave",
    "retro",
    "cyberpunk",
    "valentine",
    "halloween",
    "custom_theme",
    "garden",
    "forest",
    "aqua",
    "lofi",
    "pastel",
    "fantasy",
    "wireframe",
    "black",
    "luxury",
    "dracula",
    "cmyk",
    "autumn",
    "business",
    "acid",
    "lemonade",
    "night",
    "coffee",
    "winter",
    "dim",
    "nord",
    "sunset",
  ];
  const { searchParams, updateThemeName } = useDaisyUITheme();
  function onThemeChange(theme_name: string) {
    updateThemeName(theme_name);
  }

  return (
    <select
      data-choose-theme
      className="select select-primary select-sm"
      onChange={(e) => onThemeChange(e.target.value)}
      defaultValue={searchParams?.["--theme-name"]?.value}
    >
      <option value="dark">Default</option>
      {items.map((item) => (
        <option value={item} key={item}>
          {item}
        </option>
      ))}
    </select>
  );
}
