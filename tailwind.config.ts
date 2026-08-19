import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
    darkMode: "class",
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
        extend: {
                colors: {
                        background: 'hsl(var(--background))',
                        foreground: 'hsl(var(--foreground))',
                        card: {
                                DEFAULT: 'hsl(var(--card))',
                                foreground: 'hsl(var(--card-foreground))'
                        },
                        popover: {
                                DEFAULT: 'hsl(var(--popover))',
                                foreground: 'hsl(var(--popover-foreground))'
                        },
                        primary: {
                                DEFAULT: 'hsl(var(--primary))',
                                foreground: 'hsl(var(--primary-foreground))'
                        },
                        secondary: {
                                DEFAULT: 'hsl(var(--secondary))',
                                foreground: 'hsl(var(--secondary-foreground))'
                        },
                        muted: {
                                DEFAULT: 'hsl(var(--muted))',
                                foreground: 'hsl(var(--muted-foreground))'
                        },
                        accent: {
                                DEFAULT: 'hsl(var(--accent))',
                                foreground: 'hsl(var(--accent-foreground))'
                        },
                        destructive: {
                                DEFAULT: 'hsl(var(--destructive))',
                                foreground: 'hsl(var(--destructive-foreground))'
                        },
                        border: 'hsl(var(--border))',
                        input: 'hsl(var(--input))',
                        ring: 'hsl(var(--ring))',
                        chart: {
                                '1': 'hsl(var(--chart-1))',
                                '2': 'hsl(var(--chart-2))',
                                '3': 'hsl(var(--chart-3))',
                                '4': 'hsl(var(--chart-4))',
                                '5': 'hsl(var(--chart-5))'
                        },
                        // Gurur Brand Palette
                        navy: {
                                DEFAULT: '#0B1F3A',
                                50: '#E7EBF1',
                                100: '#C3CCD9',
                                200: '#9FAEC3',
                                300: '#7B8FAD',
                                400: '#577083',
                                500: '#335064',
                                600: '#2A4055',
                                700: '#1C2D49',
                                800: '#13263B',
                                900: '#0B1F3A',
                        },
                        gold: {
                                DEFAULT: '#C9A24D',
                                50: '#FBF6E9',
                                100: '#F5E9C7',
                                200: '#EAD496',
                                300: '#DCBC66',
                                400: '#C9A24D',
                                500: '#B8912F',
                                600: '#947425',
                                700: '#70571C',
                                800: '#4D3A12',
                                900: '#291D09',
                        },
                        warmwhite: '#FAF9F6',
                        slatey: '#566274',
                        hairline: '#D8DCE3',
                },
                fontFamily: {
                        serif: ['var(--font-fraunces)', 'Georgia', 'serif'],
                        sans: ['var(--font-plex-sans)', 'system-ui', 'sans-serif'],
                        mono: ['var(--font-plex-mono)', 'ui-monospace', 'monospace'],
                },
                letterSpacing: {
                        'widest-2': '0.18em',
                        'widest-3': '0.25em',
                },
                borderRadius: {
                        lg: 'var(--radius)',
                        md: 'calc(var(--radius) - 2px)',
                        sm: 'calc(var(--radius) - 4px)'
                },
                maxWidth: {
                        '8xl': '88rem',
                        '9xl': '100rem',
                },
                keyframes: {
                        'fade-up': {
                                '0%': { opacity: '0', transform: 'translateY(20px)' },
                                '100%': { opacity: '1', transform: 'translateY(0)' },
                        },
                        'fade-in': {
                                '0%': { opacity: '0' },
                                '100%': { opacity: '1' },
                        },
                        'seal-stamp': {
                                '0%': { opacity: '0', transform: 'scale(0.6) rotate(-12deg)' },
                                '60%': { opacity: '1', transform: 'scale(1.08) rotate(-2deg)' },
                                '100%': { opacity: '1', transform: 'scale(1) rotate(0deg)' },
                        },
                        'slide-in-right': {
                                '0%': { opacity: '0', transform: 'translateX(40px)' },
                                '100%': { opacity: '1', transform: 'translateX(0)' },
                        },
                },
                animation: {
                        'fade-up': 'fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards',
                        'fade-in': 'fade-in 0.9s ease-out forwards',
                        'seal-stamp': 'seal-stamp 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards',
                        'slide-in-right': 'slide-in-right 0.6s ease-out forwards',
                },
        }
  },
  plugins: [tailwindcssAnimate],
};
export default config;
