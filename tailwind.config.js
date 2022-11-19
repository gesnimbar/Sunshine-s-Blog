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
          'background-gray': '#E9EEEC',
          'black-gray': '#1D2C44',
          'light-gray': '#1D2C44'
        },
        sunshine: {
          'background-gray': '#E9EEEC',
          'black-gray': '#1D2C44',
          'light-gray': '#1D2C44'
        }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
