import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
    }

    const { error } = await resend.emails.send({
      from: "DAMMYOUNG Newsletter <onboarding@resend.dev>",
      to: ["contact@dammyoung.com"],
      subject: "New Newsletter Subscriber – DAMMYOUNG",
      html: `<h2>New Subscriber</h2><p>Email: <strong>${email}</strong></p>`,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err: any) {
    return NextResponse.json({ error: err.message || "Failed" }, { status: 500 });
  }
}