/** @type {import('tailwindcss').Config} */
export default {
    content: [
      './app/**/*.{js,ts,jsx,tsx}', // Aqui você inclui os diretórios e arquivos que o Tailwind precisa analisar.
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {
        // Se você tiver personalizações como cores ou fontes, pode colocá-las aqui.
      },
    },
    plugins: [],
  }
  