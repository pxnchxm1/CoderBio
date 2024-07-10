
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: '425px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors: {
        'bg-light': '#e9d5ff',
        'light-for-dark':'#BB57E9',
        'light-for-light':'#967FAF',
        'card-bg':'#9885AD',
        'heading-color-light': '#4C0098',
        'small-text-color-light':'#10002D',
        'bg-dark': '#000000',
        'bg-secondary-dark':"#140015",
        'heading-color-dark': '#BA74FF',
        'small-text-color-dark':'#e9d5ff',
      },
      fontFamily: {
        space:["Space Grotesk", 'sans-serif'],
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        Nunito:['Nunito']
      },
  
    },
  },
  plugins: [],
  darkMode:'class'
}

