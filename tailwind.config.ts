/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Paleta de cores definida nas regras do Cursor
        'gray': {
          'light': '#858585',    // gray/light - para bordas de cards, inputs, etc.
          'medium': '#353535',   // gray/medium - para fundo de cards e componentes
          'dark': '#232323',     // gray/dark - para cor de fundo das páginas
        },
        'purple': {
          'medium': '#8437B1',   // purple/medium - cor principal do sistema, botões
        },
        'green': {
          'medium': '#6BBE4E',   // green/medium - cor verde quando necessário
        },
        'white': {
          'light': '#FFFFFF',    // white/light - para textos
        },
      },
      backgroundColor: {
        'gray-light': '#858585',
        'gray-medium': '#353535',
        'gray-dark': '#232323',
        'purple-medium': '#8437B1',
        'green-medium': '#6BBE4E',
        'white-light': '#FFFFFF',
      },
      textColor: {
        'gray-light': '#858585',
        'gray-medium': '#353535',
        'gray-dark': '#232323',
        'purple-medium': '#8437B1',
        'green-medium': '#6BBE4E',
        'white-light': '#FFFFFF',
      },
      borderColor: {
        'gray-light': '#858585',
        'gray-medium': '#353535',
        'gray-dark': '#232323',
        'purple-medium': '#8437B1',
        'green-medium': '#6BBE4E',
        'white-light': '#FFFFFF',
      },
    },
  },
  plugins: [],
} 