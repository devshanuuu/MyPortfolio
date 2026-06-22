/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0b0d10',
        panel: '#13161b',
        line: '#23272f',
        fg: '#e7e9ec',
        heading: '#f3f4f6',
        muted: '#9aa1ab',
        faint: '#5f6671',
        accent: {
          DEFAULT: '#f6b35a',
          muted: '#e89f3c',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
    },
  },
  plugins: [],
}
