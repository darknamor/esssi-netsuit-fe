import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';

export const mainTheme = createTheme({
  palette: {
    primary: {
      main: '#072a40',
    },
    secondary: {
      main: '#543884',
    },
    error: {
      main: red.A400,
    },
    button: {
      main: '#f5f5f5',
    },
  },
});
