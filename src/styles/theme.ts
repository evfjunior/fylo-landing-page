export const theme = {
  border: {
    radius: '0.4rem'
  },
  colors: {
    blue: 'hsl(198, 60%, 50%)',
    cyan: 'hsl(176, 68%, 64%)',
    red: 'hsl(0, 100%, 63%)',
    white: 'hsl(0, 0%, 100%)',
    bgColor: 'hsl(218, 28%, 13%)',
    footerBg: 'hsl(216, 53%, 9%)',
    introBg: 'hsl(217, 28%, 15%)',
    testimonialsBg: 'hsl(219, 30%, 18%)'
  },
  font: {
    family: {
      main: "'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif",
      heading:
        "Raleway, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif"
    },
    weight: {
      normal: 400,
      bold: 700
    },
    sizes: {
      medium: '1.4rem'
    }
  },
  grid: {
    container: '120rem',
    gutter: '3.2rem'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  },
  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem'
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out',
    slow: '0.5s ease-in-out'
  }
} as const
