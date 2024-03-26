import { ModalProvider } from '@/providers/modal-provider'
import { ThemeProvider } from '@/providers/theme-provider'
import { ToastProvider } from '@/providers/toast-provider'
import { Inter } from 'next/font/google'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
   title: 'Enzo Gadgets',
   description: 'E-Commerce Store',
   keywords: ['E-Commerce', 'Store', 'Shop'],
   authors: [{ name: 'Kazi Efazul Karim', url: 'https://efazulkarim.live' }],
   colorScheme: 'dark',
   creator: 'Kazi Efazul Karim',
   publisher: 'Kazi Efazul Karim',
}

export default async function RootLayout({
   children,
}: {
   children: React.ReactNode
}) {
   return (
      <html lang="en">
         <body className={inter.className}>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
               <ToastProvider />
               <ModalProvider />
               {children}
            </ThemeProvider>
         </body>
      </html>
   )
}
