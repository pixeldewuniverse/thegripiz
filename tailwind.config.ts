import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
<<<<<<< codex/fix-font-loading-and-menu-images-2parhp
        heading: ['var(--font-heading)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
        accent: ['var(--font-body)', 'sans-serif'],
        subheading: ['var(--font-body)', 'sans-serif']
=======
        heading: ['var(--font-league)', 'sans-serif'],
        body: ['var(--font-lexend)', 'sans-serif'],
        accent: ['var(--font-holiday)', 'sans-serif'],
        subheading: ['var(--font-holiday)', 'sans-serif']
>>>>>>> main
      },
      colors: {
        fireRed: '#C85048',
        burntOrange: '#FF6A2B',
        charcoal: '#111111',
        smoke: '#1E1E1E',
        whiteSmoke: '#F5F5F5',
        steel: '#3A3A3A'
      },
      boxShadow: {
        fire: '0 0 0 1px rgba(200,80,72,0.2), 0 15px 40px rgba(255,106,43,0.25)'
      },
      backgroundImage: {
        ember:
          'radial-gradient(circle at 20% 20%, rgba(255,106,43,0.25), transparent 40%), radial-gradient(circle at 80% 0%, rgba(200,80,72,0.2), transparent 45%)'
      },
      keyframes: {
        rise: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        pulseGlow: {
          '0%,100%': { boxShadow: '0 0 0 rgba(255,106,43,0.0)' },
          '50%': { boxShadow: '0 0 28px rgba(255,106,43,0.35)' }
        }
      },
      animation: {
        rise: 'rise .8s ease forwards',
        pulseGlow: 'pulseGlow 2.6s ease-in-out infinite'
      }
    }
  },
  plugins: []
};

export default config;
