import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';

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
      <body className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <ContactForm />
      </body>
    </html>
  );
}
