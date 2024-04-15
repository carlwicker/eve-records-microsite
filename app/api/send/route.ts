import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import { EmailTemplate } from "../../../components/EmailTemplate";
import { Resend } from "resend";

export async function GET() {
  const resend = new Resend(process.env.RESEND_API);

  try {
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "carlwicker@gmail.com",
      subject: "Eve Records Website Contacat Form",
      html: "<p>Message</p>",
    });

    console.log({ data });

    if (error) {
      return NextResponse.json({ error });
    }

    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
