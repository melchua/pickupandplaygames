import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { success: false, error: "All fields are required" },
        { status: 400 }
      );
    }

    // Send email via Resend
    const { data, error } = await resend.emails.send({
      from: "hello@pickupandplaygames.com", // Use this for testing, later you can use your own domain
      to: "hello@pickupandplaygames.com",
      subject: `Contact Form: ${subject}`,
      replyTo: email, // This allows you to reply directly to the person who submitted the form
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap;">${message}</p>
        
        <hr style="margin: 20px 0;">
        <p><em>This message was sent from the Pickup and Play Games contact form.</em></p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { success: false, error: "Failed to send email" },
        { status: 500 }
      );
    }

    console.log("Email sent successfully:", data);
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
