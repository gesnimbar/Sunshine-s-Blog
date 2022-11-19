const BLOG = require('./blog.config')
const fontFamilies = require('./lib/font')

module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js', './layouts/**/*.js', './themes/**/*.js'],
  darkMode: BLOG.APPEARANCE === 'class' ? 'media' : 'class', // or 'media' or 'class'
  theme: {
    fontFamily: fontFamilies,
    extend: {
      colors: {
        day: {
          DEFAULT: BLOG.BACKGROUND_LIGHT || '#E9EEEC'
        },
        night: {
          DEFAULT: BLOG.BACKGROUND_DARK || '#1D2C44'
        },
        hexo: {
          'background-gray': '#1D2C44',
          'black-gray': '#8C8F93',
          'light-gray': '#E9EEEC'
        }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
