import '@/styles/globals.css';
import { CssBaseline } from '@mui/material';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import { darkTheme } from '@/themes/dark';
import { lightTheme } from '@/themes/light';
import Footer from '@/components/miscellaneous/Footer';
import { useEffect, useState } from 'react';
import ThemeSelector from '@/components/miscellaneous/ThemeSelector';

export default function MyApp({ Component, pageProps }) {
    const [theme, setTheme] = useState(lightTheme);

    function changeTheme(theme) {
        if (theme === 'primary')
            setTheme(darkTheme);
        else
            setTheme(lightTheme);
    }

    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                <ThemeSelector setTheme={(t) => changeTheme(t)} />
                <CssBaseline />
                <div className='grid grid-rows-[w-fit_1fr_w-fit]'>
                    <Component {...pageProps} />
                    <Footer/>
                </div>
            </ThemeProvider>
        </StyledEngineProvider>
    );
}