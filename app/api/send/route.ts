import { EmailTemplate } from "../../../components/EmailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API);

export async function POST(request: Request) {
  try {
    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["delivered@resend.dev"],
      subject: "Hello world",
      react: EmailTemplate({ firstName: "John" }),
      text: "Hello world",
    });

    return new Response(JSON.stringify({ data }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error }), { status: 500 });
  }
}
