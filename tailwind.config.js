module.exports = {
  purge: ["./components/**/*.js", "./pages/**/*.js"],

  variants: {
    extend: {
      translate: ["group-hover", "hover"],
      transform: ["group-hover", "hover"],
    },
  },

  theme: {
    extend: {
      colors: {
        "accent-1": "#1abc9c",
        "accent-1-lighter": "#aff7d0",
        "accent-1-hover": "#0e685f",
        "accent-2": "#725ac1",
        "accent-2-lighter": "#C0B2F0",
        "accent-2-hover": "#553ca5",
        "accent-7": "#1e1e1e",
        success: "#0070f3",
        cyan: "#79FFE1",
      },
      spacing: {
        28: "7rem",
      },
      letterSpacing: {
        tighter: "-.04em",
      },
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        "5xl": "2.5rem",
        "6xl": "2.75rem",
        "7xl": "4.5rem",
        "8xl": "6.25rem",
        "9xl": "8.25rem",
        "10xl": "12rem",
      },
      boxShadow: {
        small: "0 5px 10px rgba(0, 0, 0, 0.12)",
        medium: "0 8px 30px rgba(0, 0, 0, 0.12)",
      },
      scale: {
        200: "2",
        250: "2.5",
        300: "3",
      },

      fontFamily: {
        sans: ["Supreme", "system-ui", "sans"],
        serif: ["Zodiak", "serif"],
        display: ["Bueno", "New Title"],
        mono: ["Recursive", "monospaced"],
      },
    },
  },

  plugins: [
    require("tailwind-scrollbar-hide"),
    // ...
  ],
};
