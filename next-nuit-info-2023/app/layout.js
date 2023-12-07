import { Inter } from 'next/font/google'
// import './globals.css'
import '@/styles/globals.css';
import { ThemeProvider, CssBaseline } from '@mui/joy';
import { StyledEngineProvider } from '@mui/joy/styles';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Nuit Info 2023 - Full Stack Baby',
  description: `Projet de la Nuit de l'Info 2023 par l'équipe Full Stack Baby`,
}

export default function RootLayout({ children }) {
  return (
    // <html lang="en">
    //   <body className={inter.className}>{children}</body>
    // </html>
    <html>
      <StyledEngineProvider injectFirst>
        <ThemeProvider>
          <CssBaseline />
          <body className={inter.className}>{children}</body>
        </ThemeProvider>
      </StyledEngineProvider>
    </html>
  )
}
