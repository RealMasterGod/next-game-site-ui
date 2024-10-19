import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        myDarkBlue: "#14112E",
        myBlue: "#48BFC9",
        myRed: "#ED3A26",
        myGreen: "#6EB050"
      },
      fontFamily: {
        odibee: "var(--font-odibee)",
        port: "var(--font-port)"
      },
      backgroundImage: {
        primary: "linear-gradient(170deg, #14112E 1%, #302A64 40%, #14112E 100%)",
        secondary: "linear-gradient(170deg,#14112E 40%, #292456 60%, #14112E 80%)",
        tertiary: "linear-gradient(170deg, #14112E 10%, #302A64 100%, #14112E 100%)",
        quaternary: "linear-gradient(180deg, #1B8B95 0%, rgba(72, 191, 201, 0) 100%)",
        penta: "linear-gradient(170deg, #14112E 20.37%, #272257 60%, #14112E 80%, #191541 90%,#272257 100%)",
        special: "linear-gradient(123.99deg,#191541 30%, #1F292F 76%, #22AAC8 100%)",
        hexa: "linear-gradient(123.99deg, #201A51 9.29%, #1F292F 51.25%, #22AAC8 92.41%)",
        hepta: "linear-gradient(165deg,#2C2758 31.82%,#3D3581 60%, #47B9C5 99.09%, rgba(71, 185, 197, 0) 100%)",
        footer: "linear-gradient(155.76deg, #1E1A40 42.83%,#2c265e 48.16%, #0c0a1f 53%, #06050f 80%)"
      }
    },
  },
  plugins: [],
};
export default config;
