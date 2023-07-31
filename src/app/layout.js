import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Paw Prints Perth | Professional Dog Walking Services in Scone, Perth UK',
  description: 'Looking for reliable dog walking services in Scone, Perth and surrounding areas? Paw Prints Perth offers group walks, solo walks, and pup visits for your furry friends. Trust Paw Prints Perth to be your dog&apos;s best friend when you can&apos;t be there. Contact us today!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
