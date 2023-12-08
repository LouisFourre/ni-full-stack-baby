import '@/styles/globals.css';
import { CssBaseline } from '@mui/material';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import { darkTheme } from '@/themes/dark';
import { lightTheme } from '@/themes/light';
import NavBar from '@/components/miscellaneous/NavBar';
import Footer from '@/components/miscellaneous/Footer';
import { useEffect, useState } from 'react';
import Sticky from "react-sticky-el";

export default function MyApp({ Component, pageProps }) {
    const [theme, setTheme] = useState(lightTheme);

    function changeTheme(theme) {
        if (theme === 'dark')
            setTheme(darkTheme);
        else
            setTheme(lightTheme);
    }

    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <div className='h-screen grid grid-rows-[auto_1fr_auto]'>
                    <div>
                        <Sticky>
                            <NavBar setTheme={(t) => changeTheme(t)} />
                        </Sticky>
                    </div>
                    <div>
                        <Component {...pageProps} />
                    </div>
                    <div>
                        <Footer/>
                    </div>
                </div>
            </ThemeProvider>
        </StyledEngineProvider>
    );
}