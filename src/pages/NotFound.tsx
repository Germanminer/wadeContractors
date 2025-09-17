import '../style.css'
import Navbar from '../components/Navbar.tsx'
import ContactForm from "../components/ContactForm.tsx";
import Footer from "../components/Footer.tsx"
import {Link} from "react-router-dom";
export default function NotFound() {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <ContactForm/>
            <main className="flex flex-grow flex-col items-center justify-center p-4 text-center">
                <h1 className="mb-4 text-3xl font-bold text-gray-900">
                    This page does not exist
                </h1>
                <p className="text-gray-700">
                    Sorry, we couldn’t find the page you’re looking for.
                </p>
                <Link to="/" className="mt-5 inline-flex items-center rounded-2xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-md transition-colors duration-200 hover:bg-blue-700">
                    Home
                </Link>
            </main>
            <Footer />
        </div>
    );
}