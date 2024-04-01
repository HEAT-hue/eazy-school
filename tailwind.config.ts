import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        pry: '#fd7e14',
        sec: '#0d6efd',
        // "blue": "",
        // "indigo": "#6610f2",
        // "purple": "#6f42c1",
        // "pink": "#d63384",
        // "red": "#dc3545",
        // "orange": "",
        // "yellow": "#ffc107",
        // "green": "#198754",
        // "teal": "#20c997",
        // "cyan": "#0dcaf0",
        // "gray": "#6c757d",
        // "gray-dark": "#343a40",
        // "primary": "#0d6efd",
        // "condary": "#6c757d",
        // "success": "#198754",
        // "info": "#0dcaf0",
        // "warning": "#ffc107",
        // " danger": "#dc3545",
        // "light": "#f8f9fa",
        // "dark": "#212529",
      },
      padding: {
        'inline': '50px',
        'sm-inline': '15px'
      }
    },
  },
  plugins: [],
};
export default config;
