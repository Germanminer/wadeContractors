import '../style.css'
import Navbar from '../components/Navbar.tsx'
import ContactForm from "../components/ContactForm.tsx";
import Footer from "../components/Footer.tsx"
import {Link} from "react-router-dom";
export default function NotFound() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <ContactForm/>
            <main className="flex-grow flex flex-col items-center justify-center text-center p-4">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                    This page does not exist
                </h1>
                <p className="text-gray-700">
                    Sorry, we couldn’t find the page you’re looking for.
                </p>
                <Link to="/" className="inline-flex items-center px-6 py-3 mt-5 bg-blue-600 text-white font-semibold rounded-2xl shadow-md hover:bg-blue-700 transition-colors duration-200">
                    Home
                </Link>
            </main>

            <Footer />
        </div>
    );
}