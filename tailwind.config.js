module.exports = {
  purge: ['./public/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        gray: '#353535',
        blue: '#3DADFE',
        lightblue: '#5C9AF6',
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
