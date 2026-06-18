import type { Config } from 'tailwindcss'

export default {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Baloo 2"', 'sans-serif'],
        sans:    ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':       { transform: 'translateY(-24px)' },
        },
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
      },
      colors: {
        primary: '#1B4F72',
        secondary: '#4FB8E8',
        accent: '#F2A93B',
        background: '#F7FAFC',
        'background-surface': '#FFFFFF',
        foreground: '#0F2A3D',
        'foreground-muted': '#5C7A8A',
        border: '#D9E6EC',
        'ice-tint':   '#DCEEF7',
        'frost-deep': '#0A3349',
        success: '#16A34A',
        warning: '#F59E0B',
        danger: '#DC2626',
        info: '#2563EB',
      },
    },
  },
} satisfies Config
