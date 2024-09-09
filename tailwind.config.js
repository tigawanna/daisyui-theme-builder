/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */


// "--p": "primary",          // primary color and its values
// "--pc": "primary-content", // color of content within primary color

// "--s": "secondary",        // secondary color and its values
// "--sc": "secondary-content", // color of content within secondary color

// "--n": "neutral",          // state color and its values
// "--nc": "neutral-content", // color of content within state color

// "--a": "accent",          // accent color and its values
// "--ac": "accent-content", // color of content within accent color

// "--b1": "base-100",              // base color, also called gray color
// "--b2": "base-200",              // base color, also called gray color
// "--b3": "base-300",              // base color, also called gray color
// "--bc": "base-content",           // base color, also called gray color

// "--in": "info",          // info color and its values
// "--inc": "info-content", // color of content within info color

// "--su": "success",          // success color and its values
// "--suc": "success-content", // color of content within success color

// "--wa": "warning",          // warning color and its values
// "--wac": "warning-content", // color of content within warning color

// "--er": "error",          // error color and its values
// "--erc": "error-content", // color of content within error color

// "--rounded-box": "1rem",          // border radius rounded-box utility class, used in card and other large boxes
// "--rounded-btn": "0.5rem",        // border radius rounded-btn utility class, used in buttons and similar element
// "--rounded-badge": "1.9rem",      // border radius rounded-badge utility class, used in badges and similar

// "--animation-btn": "0.25s",       // duration of animation when you click on button
// "--animation-input": "0.2s",      // duration of animation for inputs like checkbox, toggle, radio, etc

// "--btn-focus-scale": "0.95",      // scale transform of button when you focus on it
// "--border-btn": "1px",            // border width of buttons

// "--tab-border": "1px",            // border width of tabs
// "--tab-radius": "0.5rem",         // border radius of tab
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "oklch(var(--bc))",
        input: "oklch(var(--b1))",
        ring: "oklch(var(--ac))",
        background: "oklch(var(--b1))",
        foreground: "oklch(var(--bc))",
        "chart-1": "oklch(var(--p))",
        "chart-2": "oklch(var(--s))",
        "primary-foreground": "oklch(var(--pc))",
        "secondary-foreground": "oklch(var(--sc))",
        "accent-foreground": "oklch(var(--ac))",

        destructive: {
          DEFAULT: "oklch(var(--er))",
          foreground: "oklch(var(--erc))",
        },
        muted: {
          DEFAULT: "oklch(var(--b3))",
          foreground: "oklch(var(--bc))",
        },

        popover: {
          DEFAULT: "oklch(var(--b1))",
          foreground: "oklch(var(--bc))",
        },
        card: {
          DEFAULT: "oklch(var(--b2))",
          foreground: "oklch(var(--bc))",
        },
      },
      borderRadius: {
        lg: `var(--rounded-box)`,
        md: `calc(var(--rounded-box) - 2px)`,
        sm: "calc(var(--rounded-box) - 4px)",
      },
      // fontFamily: {
      //   sans: ["var(--font-sans)", ...fontFamily.sans],
      // },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },

        overlayShow: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        contentShow: {
          from: {
            opacity: " 0",
            transform: "translate(-50%, -48%) scale(0.96)",
          },
          to: { opacity: "1", transform: "translate(-50%, -50%) scale(1)" },
        },
      },
      // translate: var(--x) var(--y) 0;
      translate: {
        "toaster-var": "var(--x) var(--y) 0",
        "toaster-x": "var(--x)",
        "toaster-y": "var(--y)",
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },

  plugins: [
    require("daisyui"),
    require("tailwindcss-animate"),
    require("./src/components/park/lib/tw-plugin.ts"),
    // require("daisify-shadcn"),
    require("@tailwindcss/container-queries"),
  ],
  daisyui: {
    themes: [
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
      {
        custom_theme: {
          "color-scheme": "light",
          primary: "#db924b",
          "primary-content": "#110802",
          secondary: "#263e3f",
          "secondary-content": "#d0d5d5",
          accent: "#10576d",
          "accent-content": "#cfdce1",
          neutral: "#120c12",
          "neutral-content": "#c9c7c9",
          "base-100": "#20161f",
          "base-200": "#1c131b",
          "base-300": "#181017",
          "base-content": "#632c3b",
          success: "#9db787",
          error: "#fc9581",
          info: "#8dcac1",
          warning: "#ffd25f",
          "--animation-btn": "0.25s",
          "--animation-input": ".2s",
          "--border-btn": "1px",
          "--btn-focus-scale": "0.95",
          "--rounded-badge": "1.9rem",
          "--rounded-box": "1rem",
          "--rounded-btn": "1.9rem",
          "--tab-border": "1px",
          "--tab-radius": "0.7rem",
        },
      },
    ],
  },
};

