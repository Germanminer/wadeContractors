import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactFormInjector from '../components/ContactFormInjector';

export const metadata = {
  title: 'Wade Contractors | Earthmoving, Site Works & Drainage in Te Aroha',
  description: 'Professional earthmoving, site works, culverts, effluent spreading, track repairs, and laser drainage services in Te Aroha, New Zealand.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col" suppressHydrationWarning>
        <Navbar />
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-white focus:px-4 focus:py-2 focus:rounded-md focus:shadow-lg">
          Skip to main content
        </a>
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <ContactFormInjector />
      </body>
    </html>
  );
}
