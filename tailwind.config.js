/** @type {import('tailwindcss').Config} */

export default {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
  	colors: {
  		uwu: 'oklch(var(--uwu)/ <alpha-value>)'
  	},
  	extend: {
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [
    require("daisyui"),
    require("tailwindcss-animate"),
    require("daisify-shadcn"),
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

