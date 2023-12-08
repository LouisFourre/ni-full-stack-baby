import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
    palette: {
        primary: {
            main: '#86efac',
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
        green: {
            main: '#4ade80',
            dark: '#16a34a'
        }
    },
});