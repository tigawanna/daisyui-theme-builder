import { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
const defaultCofig: Partial<Config> = {
  content: [],
  theme: {
    extend: {
      keyframes: {
        "ark-accordion-down": {
          from: { opacity: "0.01", height: "0" },
          to: { opacity: "1", height: "var(--height)" },
        },
        "ark-accordion-up": {
          from: { height: "var(--height)", opacity: "1" },
          to: { height: "0" , opacity: "0.01"},
        },
      },

      animation: {
        "ark-accordion-down": "ark-accordion-down 0.2s ease-out",
        "ark-accordion-up": "ark-accordion-up 0.2s ease-out",
      },
    },
  },
};
export default plugin(function ({ config }) {
    config();
}, defaultCofig);
