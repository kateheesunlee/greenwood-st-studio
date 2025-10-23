import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: NextRequest) {
  try {
    const { title, senderEmail, message } = await request.json();

    // Validate required fields
    if (!title || !senderEmail || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(senderEmail)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Check if API key is provided
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY environment variable is not set");
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      );
    }

    // Initialize Resend
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Send email using Resend
    await resend.emails.send({
      from: "Greenwood Street Studio <onboarding@resend.dev>", // Using Resend's default domain
      to: ["kateheesunlee@gmail.com"],
      replyTo: senderEmail,
      subject: `Contact Form: ${title}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h3 style="color: #5B6F3A;">New message</h3>
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #5B6F3A; margin-top: 0;">Message Details</h3>
            <p><strong>From:</strong> ${senderEmail}</p>
            <p><strong>Subject:</strong> ${title}</p>
            <p><strong>Message:</strong></p>
            <div style="background-color: white; padding: 15px; border-radius: 4px;">
              ${message.replace(/\n/g, "<br>")}
            </div>
          </div>
          <p style="color: #666; font-size: 14px;">
            This message was sent from the Greenwood Street Studio contact form.
          </p>
        </div>
      `,
    });

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
