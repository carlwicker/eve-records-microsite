import { ContactForm } from "../../../components/ContactForm";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API);

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  try {
    const data = await resend.emails.send({
      from: "Eve Records <info@everecords.co.uk>",
      to: ["carlwicker@gmail.com", "chris@recoverworld.com"],
      subject: "Eve Contact Form",
      react: ContactForm({
        name: name,
        email: email,
        message: message,
      }),
      text: "Hello world!",
    });

    return new Response(JSON.stringify({ data, message }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error }), { status: 500 });
  }
}
