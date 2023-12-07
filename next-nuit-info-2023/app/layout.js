import { Roboto } from 'next/font/google';
// import './globals.css'
import '@/styles/globals.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { StyledEngineProvider } from '@mui/material/styles';
import { darkTheme } from '@/themes/dark';

const roboto = Roboto({
  weight: '100',
  subsets: ['latin']
});

export const metadata = {
  title: 'Nuit Info 2023 - Full Stack Baby',
  description: `Projet de la Nuit de l'Info 2023 par l'équipe Full Stack Baby`,
}

export default function RootLayout({ children }) {
  return (
    // <html lang="en">
    //   <body className={roboto.className}>{children}</body>
    // </html>
    <html>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <body className={roboto.className}>{children}</body>
        </ThemeProvider>
      </StyledEngineProvider>
    </html>
  );
}
