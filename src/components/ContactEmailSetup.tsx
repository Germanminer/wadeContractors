import  { useRef,useState } from 'react';
function ContactEmailSetup() {
    const [outputText, setOutputText] = useState('');
    const [failed,setFailed] = useState(false);
    const formRef = useRef<HTMLFormElement>(null);
    const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setOutputText("Sending...");
        setFailed(false);
        if (!formRef.current) return;
        const formData = new FormData(formRef.current);
        const data = Object.fromEntries(formData.entries());

        try {
            const res = await fetch("/api/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (res.ok) {
                setOutputText("✅ Message sent successfully!");
                setFailed(false);
                formRef.current.reset();
            } else {
                throw new Error("Send failed");
            }
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (err) {
            setOutputText("❌ Oops! Something went wrong. Please try again!");
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
                    className={`my-2 px-3 py-2 text-sm rounded-md border 
                    ${failed? "text-red-600 bg-red-100 border-red-300" : "text-green-600 bg-green-100 border-green-300"}`}>
                {outputText}
                </p>
            )}
        </>
    );
}

export default ContactEmailSetup;