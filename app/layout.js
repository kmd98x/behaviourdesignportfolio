import './globals.css'
import { Montez, Jacques_Francois, Gaegu, Inter } from 'next/font/google'
import HamburgerMenu from '@/components/HamburgerMenu'

const montez = Montez({ 
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-montez',
})

const jacquesFrancois = Jacques_Francois({ 
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-jacques-francois',
});

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-inter',
})

const gaegu = Gaegu({ 
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-gaegu',
})

export const metadata = {
  title: 'Martina Doekharan - Behaviour Design Portfolio',
  description: 'Een modern portfolio website voor de minor Behaviour Design aan de Hogeschool van Amsterdam.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
      </head>
      <body className={`${montez.variable} ${jacquesFrancois.variable} ${gaegu.variable} ${inter.variable}`}>
        <HamburgerMenu />
        {children}
      </body>
    </html>
  )
}
