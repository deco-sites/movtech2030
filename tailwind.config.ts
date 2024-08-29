import daisyui from "daisyui";

export default {
  plugins: [daisyui],
  daisyui: { themes: [], logs: false },
  content: ["./**/*.tsx"],
  theme: {
    container: { center: true },
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Custom font for sans-serif
        serif: ['Merriweather', 'serif'], // Custom font for serif
        mono: ['Fira Code', 'monospace'], // Custom font for monospace
      },
      fontWeight: 700,
      animation: {
        sliding: "sliding 30s linear infinite",
      },
      keyframes: {
        sliding: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
};
