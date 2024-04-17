import { EmailTemplate } from "../../../components/Contact-Form";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API);

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  try {
    const data = await resend.emails.send({
      from: "Eve Records <info@everecords.co.uk>",
      to: ["carlwicker@gmail.com"],
      subject: "Eve Contact Form",
      react: EmailTemplate({
        name: message.name,
        email: message.email,
        message: message.message,
      }),
      text: "Hello world!",
    });

    return new Response(JSON.stringify({ data }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error }), { status: 500 });
  }
}
