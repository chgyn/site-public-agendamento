/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        whitepace: {
          navy: '#043873',
          'navy-dark': '#021B35',
          'navy-deep': '#03254C',
          'navy-card': '#072C5B',
          blue: '#4F9CF9',
          'blue-hover': '#3584E4',
          'blue-light': '#E9F2FE',
          'blue-subtle': '#F4F8FD',
          gold: '#FFE492',
          'gold-dark': '#E5C460',
          amber: '#F59E0B',
          text: '#212529',
          'text-muted': '#737373',
          slate: '#F5F7FA',
          border: '#E2E8F0',
        },
        brand: {
          primary: '#043873',
          secondary: '#4F9CF9',
          accent: '#FFE492',
          dark: '#0A192F',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Plus Jakarta Sans', 'sans-serif'],
        mono: ['Fira Code', 'JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'saas-card': '0 10px 30px -5px rgba(4, 56, 115, 0.08), 0 4px 12px -2px rgba(4, 56, 115, 0.04)',
        'saas-hover': '0 20px 45px -10px rgba(4, 56, 115, 0.16), 0 10px 20px -4px rgba(4, 56, 115, 0.08)',
        'glow-blue': '0 0 35px -5px rgba(79, 156, 249, 0.4)',
        'glow-gold': '0 0 25px -3px rgba(255, 228, 146, 0.45)',
        'inner-soft': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.04)',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #043873 0%, #032B59 55%, #021B35 100%)',
        'mesh-pattern': 'radial-gradient(circle at 50% 10%, rgba(79, 156, 249, 0.18) 0%, transparent 60%)',
        'cta-gradient': 'linear-gradient(120deg, #043873 0%, #0A4D9B 100%)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.85' },
        }
      }
    },
  },
  plugins: [],
}
