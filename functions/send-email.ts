export async function onRequestPost(context: any) {
    try {
        const body = (await context.request.json()) as { [key: string]: string };

        // Debugging: log environment variables (do NOT commit keys!)
        console.log("ENV", {
            service: context.env.EMAILJS_SERVICE_ID,
            template: context.env.EMAILJS_TEMPLATE_ID,
            user: context.env.EMAILJS_USER_ID
        });

        const payload = {
            service_id: context.env.EMAILJS_SERVICE_ID,
            template_id: context.env.EMAILJS_TEMPLATE_ID,
            user_id: context.env.EMAILJS_USER_ID,
            template_params: body,
        };

        const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
        });

        const text = await response.text();

        if (!response.ok) {
            return new Response(
                JSON.stringify({ error: "EmailJS failed", status: response.status, body: text, payload }),
                { status: 500 }
            );
        }

        return new Response(JSON.stringify({ success: true, body: text }), { status: 200 });
    } catch (err: any) {
        return new Response(JSON.stringify({ error: err.message }), { status: 500 });
    }
}
