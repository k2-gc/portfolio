import { createTheme } from '@mui/material/styles';

const NeonBlueTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#000814',
      paper: 'rgba(16, 24, 48, 0.8)',
    },
    primary: {
      main: '#0EA5E9',
      light: '#38BDF8',
      dark: '#0B5EA8',
    },
    secondary: {
      main: '#67E8F9',
    },
    text: {
      primary: '#E0F7FA',
      secondary: '#67E8F9',
    },
  },
  typography: {
    fontFamily: ['Roboto', 'sans-serif'].join(','),
    h1: {
      fontWeight: 700,
      letterSpacing: 2,
      textShadow: '0 0 16px #0EA5E9, 0 0 32px #38BDF8',
    },
    h2: {
      fontWeight: 600,
      letterSpacing: 1,
      textShadow: '0 0 8px #0EA5E9',
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          background: 'rgba(16,24,40,0.7)',
          backdropFilter: 'blur(8px)',
          border: '1px solid #0EA5E933',
          boxShadow: '0 4px 32px #0EA5E922',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: '0 0 8px #0EA5E9',
          borderRadius: 12,
        },
      },
    },
  },
});

export default NeonBlueTheme;
