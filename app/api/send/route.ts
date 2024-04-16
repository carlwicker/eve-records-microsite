import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API);

export async function POST() {
  try {
    const data = await resend.emails.send({
      from: "Carl Wicker <carlwicker@gmail.com>",
      to: ["carlwicker@gmail.com"],
      subject: "Hello world",
      html: "<p>Hello again</p>",
    });

    return Response.json({ data });
  } catch (error) {
    return Response.json({ error });
  }
}
