module.exports = {
  content: ['./dist/**/*.html','./dist/**/*.js'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      'arvo': ['Arvo', 'serif'],
      'lato': ['Lato', 'sans-serif'],
      'noto': ['Noto Serif', 'serif'],
      'quicksand': ['Quicksand', 'sans-serif'],
      'arvo': ['Arvo', 'serif'],
      'inter': ['Inter', 'sans-serif'],
      'nunito': ['Nunito Sans', 'sans-serif'],
    },
    extend: {
      colors: {
        brightRed: 'hsl(12, 88%, 59%)',
        brightRedLight: 'hsl(12, 88%, 69%)',
        brightRedDark: 'hsl(12, 62%, 46%)',
        brightRedSupLight: 'hsl(12, 88%, 95%)',
        darkBlue: 'hsl(228, 39%, 23%)',
        darkGrayishBlue: 'hsl(227, 12%, 61%)',
        veryDarkBlue: 'hsl(233, 12%, 13%)',
        veryPaleRed: 'hsl(13, 100%, 96%)',
        veryLightGray: 'hsl(0, 0%, 98%)',
      },
    },
  },
  plugins: [],
}
