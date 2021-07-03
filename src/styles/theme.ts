export default {
  colors: {
    black: '#29292E',
    shadow: '#050206',
    purple: '#835AFD',
    orange: '#ea4335',
    gradient: 'linear-gradient(139.44deg, #485BFF 0%, #FF59F8 96.19%)',
    gray: {
      dark: '#737380',
      medium: '#A8A8B3',
      light: '#DBDCDD'
    },
    white: {
      main: '#FFFFFF',
      background: '#F8F8F8',
      details: '#FEFEFE'
    },
    pink: {
      dark: '#E559F9',
      light: '#D67EE2'
    },
    hover: {
      hover: '#6F4BD8',
      danger: '#D73754',
      grayMedium: '#7E7E86',
      grayLight: '#CECECE'
    }
  },
  sizes: {
    'size-8': '0.5rem',
    'size-14': '0.875rem',
    'size-16': '1rem',
    'size-24': '1.5rem',
    'size-32': '2rem',
    'size-36': '2.25rem',
    'size-40': '2.5rem',
    'size-42': '2.625rem',
    'size-45': '2.8125rem',
    'size-50': '3.125rem',
    'size-64': '4rem',
    'size-80': '5rem',
    'size-120': '7.5rem',
    'size-320': '20rem'
  },
  radius: {
    percentage: '50%'
  },
  fontWeight: {
    '700': '700',
    '500': '500'
  },
  fontFamily: {
    poppins: "'Poppins', sans-serif",
    roboto: "'Roboto', sans-serif"
  },
  breakpoints: {
    phones: '600px',
    desktop: '1024px'
  }
} as const
