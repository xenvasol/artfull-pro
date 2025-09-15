import { type NextRequest, NextResponse } from "next/server"
import sgMail from "@sendgrid/mail"

// Initialize SendGrid
if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, company, budget, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 })
    }

    if (!process.env.SENDGRID_API_KEY) {
      console.error("SendGrid API key not configured")
      return NextResponse.json({ error: "Email service not configured" }, { status: 500 })
    }

    if (!process.env.SENDGRID_FROM_EMAIL) {
      console.error("SendGrid from email not configured")
      return NextResponse.json({ error: "Email service not configured" }, { status: 500 })
    }

    // Prepare email content
    const msg = {
      to: process.env.SENDGRID_TO_EMAIL || process.env.SENDGRID_FROM_EMAIL,
      from: process.env.SENDGRID_FROM_EMAIL,
      subject: `New Project Inquiry from ${name}`,
      text: `
        New project inquiry received:
        
        Name: ${name}
        Email: ${email}
        Company: ${company || "Not provided"}
        Budget: ${budget || "Not provided"}
        
        Message:
        ${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1f2937;">New Project Inquiry</h2>
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Company:</strong> ${company || "Not provided"}</p>
            <p><strong>Budget:</strong> ${budget || "Not provided"}</p>
          </div>
          <div style="margin: 20px 0;">
            <h3 style="color: #1f2937;">Message:</h3>
            <p style="background-color: #f9fafb; padding: 15px; border-radius: 8px; line-height: 1.6;">
              ${message.replace(/\n/g, "<br>")}
            </p>
          </div>
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;">
          <p style="color: #6b7280; font-size: 14px;">
            This email was sent from the Artful Pro Company website contact form.
          </p>
        </div>
      `,
    }

    // Send email
    await sgMail.send(msg)

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
}
