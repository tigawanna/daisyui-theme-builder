import { useSearchParamsTheme } from "../all-in-one-theme-editor/utils/use-search-params-theme";

interface DaisyuiThemesSelectProps {}

export function DaisyuiThemesSelect({}: DaisyuiThemesSelectProps) {
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
  const {searchParams,navigate,updateThemeName} = useSearchParamsTheme();
  function onThemeChange(theme_name: string) {
    updateThemeName(theme_name);

  }

  return (
    <select
      data-choose-theme
      className="select select-primary select-sm"
      onChange={(e) => onThemeChange(e.target.value)}>
      <option value="text-center">Default</option>
      {items.map((item) => (
        <option value={item} key={item}>
          {item}
        </option>
      ))}
    </select>
  );
}
