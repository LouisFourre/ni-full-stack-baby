import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
    palette: {
        primary: {
            main: '#ff8031',
            light: '#42a5f5',
            dark: '#1565c0',
            contrastText: '#fff',
        },
        secondary: {
            main: '#f44336',
            light: '#ff7961',
            dark: '#ba000d',
            contrastText: '#000',
        },
        ochre: {
            main: '#e65100',
            light: '#ff833a',
            dark: '#ac1900',
            contrastText: '#000',
        },
    },
});