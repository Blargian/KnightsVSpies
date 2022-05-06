module.exports = {
  content: [
    './public/index.html',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        gray: '#353535',
        lightgray: '#4C4C4E',
        blue: '#3DADFE',
        lightblue: '#5C9AF6',
        green: '#11CD01',
        lightgreen: '#15FF01',
        sky400: '#38bdf8',
        amber: '#fbbf24'
      },
      animation:{
        'fadein': 'fade 10s'
      },
      keyframes: {
        fade: {
          '0%': {opacity:'0'},
          '100%':{opacity:'1'}
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
