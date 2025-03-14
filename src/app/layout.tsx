import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import Link from 'next/link';
import './globals.css';
import { NextAuthProvider } from '@/providers/NextAuthProvider';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const poppins = Poppins({ 
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins'
});

export const metadata: Metadata = {
  title: 'KrishiUdyog - Agricultural Products Marketplace',
  description: 'Your trusted marketplace for high-quality agricultural products directly from farmers',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} font-sans`}>
        <header className="bg-primary text-white shadow-md">
          <nav className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center space-x-2">
                <img 
                  src="/images/LOGO.jpeg" 
                  alt="KrishiUdyog Logo" 
                  className="h-10 w-10 rounded-full object-cover"
                />
                <h1 className="text-2xl font-bold font-display">KrishiUdyog</h1>
              </Link>
              <div className="hidden md:flex space-x-6">
                <Link href="/" className="hover:text-secondary transition-colors font-medium">Home</Link>
                <Link href="/products" className="hover:text-secondary transition-colors font-medium">Products</Link>
                <Link href="/cart" className="hover:text-secondary transition-colors font-medium">Cart</Link>
                <Link href="/dashboard" className="hover:text-secondary transition-colors font-medium">Dashboard</Link>
              </div>
              <div className="flex space-x-3">
                <Link href="/signin" className="px-4 py-2 rounded-md bg-white text-primary hover:bg-gray-100 transition-colors font-medium">Sign In</Link>
                <Link href="/signup" className="px-4 py-2 rounded-md bg-accent text-white hover:bg-opacity-90 transition-colors font-medium">Sign Up</Link>
              </div>
            </div>
          </nav>
        </header>
        <main className="container mx-auto px-4 py-8 min-h-[calc(100vh-180px)]">
          <NextAuthProvider>{children}</NextAuthProvider>
        </main>
        <footer className="bg-dark text-white mt-8">
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold font-display mb-4">KrishiUdyog</h3>
                <p className="text-gray-300">Your trusted marketplace for high-quality agricultural products directly from farmers.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><Link href="/" className="text-gray-300 hover:text-white">Home</Link></li>
                  <li><Link href="/products" className="text-gray-300 hover:text-white">Products</Link></li>
                  <li><Link href="/about" className="text-gray-300 hover:text-white">About Us</Link></li>
                  <li><Link href="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4">Contact Us</h3>
                <p className="text-gray-300">Email: info@krishiudyog.com</p>
                <p className="text-gray-300">Phone: +91 123 456 7890</p>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
              © 2024 KrishiUdyog. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
} 