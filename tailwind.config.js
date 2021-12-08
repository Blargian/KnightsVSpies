module.exports = {
  purge: ['./public/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        gray: '#353535',
        blue: '#3DADFE',
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
