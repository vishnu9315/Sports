import type { Metadata } from 'next'
import { Mulish } from 'next/font/google'
import './globals.css'
import Header from '../components/oraganisms/Header'
import Footer from '../components/oraganisms/Footer'


const mulish = Mulish({ subsets: ['latin'] })

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body  className={mulish.className}>
        <Header />
        {children}
        <Footer />
        </body>
    </html>
  );
}
  



 