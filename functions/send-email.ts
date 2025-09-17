export async function onRequestPost(context) {
    try {
        const body = await context.request.json();

        const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                service_id: context.env.EMAILJS_SERVICE_ID,
                template_id: context.env.EMAILJS_TEMPLATE_ID,
                user_id: context.env.EMAILJS_USER_ID,
                template_params: body,
            }),
        });

        if (!response.ok) {
            return new Response(JSON.stringify({ error: "Email send failed" }), { status: 500 });
        }

        return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (err) {
        return new Response(JSON.stringify({ error: err.message }), { status: 500 });
    }
}
