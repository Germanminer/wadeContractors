import  { useRef,useState } from 'react';
import emailjs from '@emailjs/browser';
function ContactEmailSetup() {
    const [outputText, setOutputText] = useState('');
    const [failed,setFailed] = useState(false);
    const [loading, setLoading] = useState(false);
    const formRef = useRef<HTMLFormElement>(null);
    const sendEmail = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        //States
        setLoading(true);
        setOutputText('Sending...');
        setFailed(false);
        const serviceId = 'wadeContractors';
        const templateId = 'template_0mhuzx6';
        const userId = 'DD7LQI1Tis5eNNxh_';
        if (formRef.current) {
            emailjs.sendForm(serviceId, templateId, formRef.current, userId)
                .then(() => {
                    setOutputText("Message sent successfully!");
                    setLoading(false);
                    setFailed(false);
                })
                .catch(() => {
                    setOutputText("Oops! Something went wrong! Please try again!");
                    setLoading(false);
                    setFailed(true);
                });
            formRef.current?.reset();
        } else {
            setOutputText("Form is not ready!");
            setLoading(false);
            setFailed(true);
        }
    };
    return (
        <>
            <form className="flex-1 space-y-4" ref={formRef} onSubmit={sendEmail}>
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Name
                        <input
                            id="contact-form-name-input"
                            type="text"
                            className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:ring-blue-500"
                            placeholder="Your Name"
                            maxLength={50}
                            name="name"
                        />
                    </label>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Phone / Email
                        <input
                            id="contact-form-email-or-phone-input"
                            type="text"
                            className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:ring-blue-500"
                            placeholder="Your Contact*"
                            required
                            maxLength={50}
                            name="contact"
                        />
                    </label>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        How can we help?
                        <textarea
                            id="contact-form-info-input"
                            className="mt-1 w-full rounded-md border border-gray-300 p-2 h-30 focus:border-blue-500 focus:ring-blue-500"
                            placeholder="Services, Hires..."
                            maxLength={500}
                            name="message"
                        />
                    </label>
                </div>
                <button
                    id="contact-form-submit"
                    type="submit"
                    className="w-full rounded-md bg-blue-600 py-2 text-white transition hover:bg-blue-700"
                >
                    Submit
                </button>
            </form>
            {outputText && (
                <p
                    className={`my-4 w-full text-center text-lg font-semibold rounded-lg border-2 shadow-md py-3 px-4
        ${loading
                        ? "text-orange-700 bg-orange-200 border-orange-400"
                        : failed
                            ? "text-red-700 bg-red-200 border-red-400"
                            : "text-green-700 bg-green-200 border-green-400"
                    }`}
                >
                    {outputText}
                </p>
            )}


        </>
    );
}

export default ContactEmailSetup;