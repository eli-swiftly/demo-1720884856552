export const theme = {
  colors: {
    background: {
      primary: '#222222',
      secondary: '#161717',
    },
    text: {
      primary: '#F8F4F2',
      secondary: '#AAAAAA',
    },
    accent: {
      primary: '#8AB4F8',
      success: '#4CAF50',
      warning: '#FFC107',
      danger: '#FF5722',
      info: '#FF5722'
    },
    border: {
      primary: '#444444',
    },
  },
  fontSizes: {
    small: '0.875rem',
    medium: '1rem',
    large: '1.25rem',
    xlarge: '1.5rem',
  },
  spacing: {
    small: '0.5rem',
    medium: '1rem',
    large: '1.5rem',
    xlarge: '2rem',
  },
  borderRadius: {
    small: '4px',
    medium: '8px',
    large: '12px',
  },
};

export type Theme = typeof theme;