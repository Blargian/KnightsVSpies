module.exports = {
  purge: ['./public/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        gray: '#353535',
        lightgray: '#4C4C4E',
        blue: '#3DADFE',
        lightblue: '#5C9AF6',
        green: '#11CD01',
        lightgreen: '#15FF01',
      },
      backgroundImage: {
        'spy': "url('Assets/spy_bg.svg')",
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
