import '@/styles/globals.css';
import { CssBaseline } from '@mui/material';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import { Themes } from '@/themes/dark.js';

export default function MyApp({ Component, pageProps }) {
    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={Themes}>
                <CssBaseline />
                <Component {...pageProps} />
            </ThemeProvider>
        </StyledEngineProvider>
    );
}