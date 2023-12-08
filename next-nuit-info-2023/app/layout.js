import { Roboto } from 'next/font/google';
// import './globals.css'
import '@/styles/globals.css';

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
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
