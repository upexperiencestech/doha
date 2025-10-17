module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "display-large-semibold": "var(--display-large-semibold-font-family)",
        "display-small-bold": "var(--display-small-bold-font-family)",
        "headings-desktop-h1-bold":
          "var(--headings-desktop-h1-bold-font-family)",
        "headings-desktop-h2-bold":
          "var(--headings-desktop-h2-bold-font-family)",
        "headings-desktop-h4-bold":
          "var(--headings-desktop-h4-bold-font-family)",
        "headings-desktop-h5-semibold":
          "var(--headings-desktop-h5-semibold-font-family)",
        "headings-desktop-h6-bold":
          "var(--headings-desktop-h6-bold-font-family)",
        "headings-desktop-h6-regular":
          "var(--headings-desktop-h6-regular-font-family)",
        "headings-desktop-h6-semibold":
          "var(--headings-desktop-h6-semibold-font-family)",
        "headings-mobile-h4-medium":
          "var(--headings-mobile-h4-medium-font-family)",
        "headings-mobile-h5-regular":
          "var(--headings-mobile-h5-regular-font-family)",
        "headings-mobile-h5-semibold":
          "var(--headings-mobile-h5-semibold-font-family)",
        "headings-mobile-h6-bold": "var(--headings-mobile-h6-bold-font-family)",
        "headings-mobile-h6-regular":
          "var(--headings-mobile-h6-regular-font-family)",
        "headings-mobile-h6-semibold":
          "var(--headings-mobile-h6-semibold-font-family)",
        "paragraph-medium-medium": "var(--paragraph-medium-medium-font-family)",
        "paragraph-medium-regular":
          "var(--paragraph-medium-regular-font-family)",
        "paragraph-medium-semibold":
          "var(--paragraph-medium-semibold-font-family)",
        "paragraph-small-regular": "var(--paragraph-small-regular-font-family)",
        sans: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      boxShadow: { "mizko-s": "var(--mizko-s)" },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
  },
  plugins: [],
  darkMode: ["class"],
};
