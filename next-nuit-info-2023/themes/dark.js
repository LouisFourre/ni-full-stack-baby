// 'use client';

import { createTheme } from "@mui/material/styles";
// import * from "@mui/material/

export const Themes = createTheme({
    palette: {
        primary: {
            main: '#b80f31',
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
        darktheme:{
            main: '#121212',
            light: 'rgba(255, 255, 255, 0.12)',
            dark: '#1565c0',
            contrastText: '#fff',
        }
    },
});