import { createTheme } from '@mui/material/styles';

// Paleta de cores definida nas regras do Cursor
const colors = {
  gray: {
    light: '#858585',    // gray/light - para bordas de cards, inputs, etc.
    medium: '#353535',   // gray/medium - para fundo de cards e componentes
    dark: '#232323',     // gray/dark - para cor de fundo das páginas
  },
  purple: {
    medium: '#8437B1',   // purple/medium - cor principal do sistema, botões
  },
  green: {
    medium: '#6BBE4E',   // green/medium - cor verde quando necessário
  },
  white: {
    light: '#FFFFFF',    // white/light - para textos
  },
};

export const theme = createTheme({

  cssVariables: true,
  palette: {
    mode: 'dark',
    primary: {
      main: colors.purple.medium,
      light: '#a55bc4',
      dark: '#6a2a8e',
      contrastText: colors.white.light,
    },
    secondary: {
      main: colors.green.medium,
      light: '#8ed06e',
      dark: '#4a8a2e',
      contrastText: colors.white.light,
    },
    background: {
      default: colors.gray.dark,
      paper: colors.gray.medium,
    },
    text: {
      primary: colors.white.light,
      secondary: colors.gray.light,
    },
    divider: colors.gray.light,
    action: {
      active: colors.purple.medium,
      hover: colors.purple.medium + '20', // 20% opacity
      selected: colors.purple.medium + '30', // 30% opacity
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      color: colors.white.light,
      fontWeight: 700,
    },
    h2: {
      color: colors.white.light,
      fontWeight: 600,
    },
    h3: {
      color: colors.white.light,
      fontWeight: 600,
    },
    h4: {
      color: colors.white.light,
      fontWeight: 600,
    },
    h5: {
      color: colors.white.light,
      fontWeight: 600,
    },
    h6: {
      color: colors.white.light,
      fontWeight: 600,
    },
    body1: {
      color: colors.white.light,
    },
    body2: {
      color: colors.gray.light,
    },
    button: {
      color: colors.white.light,
      fontWeight: 500,
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: colors.gray.medium,
          border: `1px solid ${colors.gray.light}`,
          borderRadius: 8,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 500,
        },
        contained: {
          backgroundColor: colors.purple.medium,
          '&:hover': {
            backgroundColor: '#6a2a8e',
          },
        },
        outlined: {
          borderColor: colors.gray.light,
          color: colors.white.light,
          '&:hover': {
            borderColor: colors.purple.medium,
            backgroundColor: colors.purple.medium + '10',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: colors.gray.light,
            },
            '&:hover fieldset': {
              borderColor: colors.purple.medium,
            },
            '&.Mui-focused fieldset': {
              borderColor: colors.purple.medium,
            },
          },
          '& .MuiInputLabel-root': {
            color: colors.gray.light,
            '&.Mui-focused': {
              color: colors.purple.medium,
            },
          },
          '& .MuiInputBase-input': {
            color: colors.white.light,
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 16,
        },
        colorPrimary: {
          backgroundColor: colors.purple.medium,
          color: colors.white.light,
        },
        colorSecondary: {
          backgroundColor: colors.green.medium,
          color: colors.white.light,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: colors.gray.medium,
          borderBottom: `1px solid ${colors.gray.light}`,
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: colors.gray.medium,
          borderRight: `1px solid ${colors.gray.light}`,
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: colors.gray.medium,
          '& .MuiTableCell-head': {
            color: colors.white.light,
            fontWeight: 600,
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: `1px solid ${colors.gray.light}`,
          color: colors.white.light,
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: colors.gray.light,
          '&.Mui-checked': {
            color: colors.purple.medium,
          },
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          color: colors.gray.light,
          '&.Mui-checked': {
            color: colors.purple.medium,
          },
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        root: {
          '& .MuiSwitch-switchBase.Mui-checked': {
            color: colors.purple.medium,
          },
          '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
            backgroundColor: colors.purple.medium,
          },
        },
      },
    },
  },
});

export default theme; 