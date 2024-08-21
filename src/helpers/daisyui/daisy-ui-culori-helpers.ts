import { formatHex, interpolate, type Color, type Oklch } from "culori";

export const colorObjToString = ({ l, c, h }: Oklch): string => {
  const cut = (number: number | undefined): number => {
    if (!number) {
      return 0;
    }
    return +number.toFixed(4);
  };
  return `${cut(l) * 100}% ${cut(c)} ${cut(h)}`;
};

export const generateDarkenColorFrom = (
  input: Color | string,
  percentage = 0.07
): Color | string => {
  const result = interpolate([input, "black"], "oklch")(percentage);
  return formatHex(`oklch(${colorObjToString(result)})`) as Color | string;
};

export function changeColorValuesToObject(input: string): {
  l: number;
  c: number;
  h: number;
  a: number;
} {
  const match = input.match(/(\d+(?:\.\d+)?)%?/g);
  const [lStr, cStr, hStr] = match ? match.map(Number.parseFloat) : [0, 0, 0];
  return { l: lStr || 0, c: cStr || 0, h: hStr || 0, a: 1 };
}

export const getColorValueFromTheme = (variable: string) => {
  const colorValues = getComputedStyle(document.documentElement).getPropertyValue(variable);
  return `oklch(${colorValues})`;
};

export const getColorValueFromThemeVariable = (variable: string) => {
  const colorValues = getComputedStyle(document.documentElement).getPropertyValue(variable);
  return formatHex(
    `oklch(${changeColorValuesToObject(colorValues).l} ${
      changeColorValuesToObject(colorValues).c
    } ${changeColorValuesToObject(colorValues).h})`
  )
};
export const getThemeVariable = (variable: string) => {
  const colorValues = getComputedStyle(document.documentElement).getPropertyValue(variable);
  return colorValues;
};




export const daisy_ui_theme ={
  primary:{
    "primary":{
      name: "primary",
      variable: "--p",
      value:"",
    },
    "primary-content":{
      name: "primary-content",
      variable: "--pc",
      value:"",
    },

  },
  secondary:{
    "secondary":{
      name: "secondary",
      variable: "--s",
      value:"",
    },
    "secondary-content":{
      name: "secondary-content",
      variable: "--sc",
      value:"",
    },

  },
  accent:{
    "accent":{
      name: "accent",
      variable: "--a",
      value:"",
    },
    "accent-content":{
      name: "accent-content",
      variable: "--ac",
      value:"",
    },

  },
  neutral:{
    "neutral":{
      name: "neutral",
      variable: "--n",
      value:"",
    },
    "neutral-content":{
      name: "neutral-content",
      variable: "--nc",
      value:"",
    },

  },
  base:{
    "base-100":{
      name: "base-100",
      variable: "--b1",
      value:"", 
  },
    "base-200":{
      name: "base-200",
      variable: "--b2",
      value:"",
    },
    "base-300":{
      name: "base-300",
      variable: "--b3",
      value:"",
    },
    "base-content":{
      name: "base-content",
      variable: "--bc",
      value:"",
    }
  },
  info:{
    "info":{
      name: "info",
      variable: "--i",
      value:"",
    },
    "info-content":{
      name: "info-content",
      variable: "--inc",
      value:"",
    },

  },
  success:{
    "success":{
      name: "success",
      variable: "--s",
      value:"",  
    },
    "success-content":{
      name: "success-content",
      variable: "--sc",
      value:"",
    },

  },
  warning:{
    "warning":{
      name: "warning",
      variable: "--w",
      value:"",
    },
    "warning-content":{
      name: "warning-content",
      variable: "--wc",
      value:"",
    },

  },
  error:{
    "error":{
      name: "error",
      variable: "--e",
      value:"",
    },
    "error-content":{
      name: "error-content",
      variable: "--ec",
      value:"",
    },

  }
}




