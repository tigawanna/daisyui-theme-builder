
export const getColorValueFromTheme = (variable: string) => {
  const colorValues = getComputedStyle(document.documentElement).getPropertyValue(variable);
  return `oklch(${colorValues})`;
};


export const getThemeVariable = (variable: string) => {
  const colorValues = getComputedStyle(document.documentElement).getPropertyValue(variable);
  return colorValues;
};








