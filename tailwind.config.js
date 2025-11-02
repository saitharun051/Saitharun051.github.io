/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        terminal: {
          bg: '#0b0f10',
          grid: '#101618',
          text: '#D3F9D8',
          dim: '#8AB9A3',
          accent: '#3CF79A'
        }
      },
      fontFamily: {
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace']
      },
      boxShadow: {
        neon: '0 0 0 1px rgba(60,247,154,0.28), 0 0 32px rgba(60,247,154,0.12)'
      }
    },
  },
  plugins: [],
}
