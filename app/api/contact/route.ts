import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { firstName, lastName, email, message } = await req.json();

    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Contact Form" <${process.env.SMTP_USER}>`,
      to: process.env.EMAIL_RECEIVER,
      subject: `New Contact Message from ${firstName} ${lastName}`,
      html: `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <title>Contact Form Submission</title>
    </head>
    <body style="margin:0; padding:0; font-family: Arial, Helvetica, sans-serif; background-color:#f4f6f8;">
      <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
        <tr>
          <td align="center" style="padding:40px 0;">
            <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff; border-radius:8px; box-shadow:0 4px 12px rgba(0,0,0,0.08); overflow:hidden;">
              <!-- Header -->
              <tr>
                <td style="background:#0d47a1; padding:20px; text-align:center;">
                  <h2 style="margin:0; color:#ffffff; font-size:20px; font-weight:600;">New Contact Form Submission</h2>
                </td>
              </tr>

              <!-- Body -->
              <tr>
                <td style="padding:30px;">
                  <p style="margin:0 0 15px; font-size:16px; color:#333;">
                    You have received a new message from your website contact form. Here are the details:
                  </p>

                  <table width="100%" cellpadding="0" cellspacing="0" style="margin:20px 0; font-size:15px; color:#444;">
                    <tr>
                      <td style="padding:8px 0; font-weight:600; width:120px;">Name:</td>
                      <td style="padding:8px 0;">${firstName} ${lastName}</td>
                    </tr>
                    <tr>
                      <td style="padding:8px 0; font-weight:600;">Email:</td>
                      <td style="padding:8px 0;">${email}</td>
                    </tr>
                    <tr>
                      <td style="padding:8px 0; font-weight:600; vertical-align:top;">Message:</td>
                      <td style="padding:8px 0; line-height:1.6; white-space:pre-line;">${message}</td>
                    </tr>
                  </table>

                  <p style="margin:30px 0 0; font-size:13px; color:#888;">
                    This message was sent from your website contact form.
                  </p>
                </td>
              </tr>

              <!-- Footer -->
              <tr>
                <td style="background:#f4f6f8; padding:15px; text-align:center; font-size:12px; color:#666;">
                  &copy; ${new Date().getFullYear()} Your Company. All rights reserved.
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Email send error:", err);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
