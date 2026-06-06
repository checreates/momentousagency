import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

interface ContactPayload {
  firstName: string
  lastName: string
  email: string
  company: string
  services: string[]
  budget: string
  message: string
}

const serviceLabels: Record<string, string> = {
  brand: "Brand Strategy & Identity",
  web: "Web Development",
  marketing: "Digital Marketing",
  content: "Content Creation",
  design: "UX/UI Design",
  consulting: "Growth Consulting",
}

const budgetLabels: Record<string, string> = {
  "under-5k": "Under $5,000",
  "5k-15k": "$5,000 – $15,000",
  "15k-50k": "$15,000 – $50,000",
  "50k-plus": "$50,000+",
  "not-sure": "Not sure yet",
}

function buildHtml(data: ContactPayload): string {
  const servicesText = data.services
    .map((id) => serviceLabels[id] ?? id)
    .join(", ")

  return `
<div style="font-family:sans-serif;max-width:600px;margin:0 auto">
  <h2 style="color:#111">New contact form submission</h2>
  <table style="width:100%;border-collapse:collapse">
    <tr><td style="padding:8px 0;color:#555;width:140px">Name</td><td style="padding:8px 0;font-weight:600">${data.firstName} ${data.lastName}</td></tr>
    <tr><td style="padding:8px 0;color:#555">Email</td><td style="padding:8px 0;font-weight:600"><a href="mailto:${data.email}">${data.email}</a></td></tr>
    ${data.company ? `<tr><td style="padding:8px 0;color:#555">Company</td><td style="padding:8px 0;font-weight:600">${data.company}</td></tr>` : ""}
    <tr><td style="padding:8px 0;color:#555">Services</td><td style="padding:8px 0;font-weight:600">${servicesText}</td></tr>
    <tr><td style="padding:8px 0;color:#555">Budget</td><td style="padding:8px 0;font-weight:600">${budgetLabels[data.budget] ?? data.budget}</td></tr>
  </table>
  <h3 style="color:#111;margin-top:24px">Message</h3>
  <p style="color:#333;line-height:1.6;white-space:pre-wrap">${data.message}</p>
</div>
`
}

export async function POST(req: NextRequest) {
  let payload: ContactPayload

  try {
    payload = await req.json()
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 })
  }

  const { firstName, lastName, email, services, budget, message } = payload

  if (!firstName || !lastName || !email || !services?.length || !budget || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 422 })
  }

  const smtpHost = process.env.SMTP_HOST
  const smtpPort = Number(process.env.SMTP_PORT ?? 587)
  const smtpUser = process.env.SMTP_USER
  const smtpPass = process.env.SMTP_PASS
  const toEmail = process.env.CONTACT_TO_EMAIL ?? "hello@momentous.marketing"

  if (!smtpHost || !smtpUser || !smtpPass) {
    console.error("Email not sent: SMTP environment variables are not configured.")
    return NextResponse.json(
      { error: "Email service is not configured. Please set SMTP_HOST, SMTP_USER, and SMTP_PASS." },
      { status: 503 }
    )
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: { user: smtpUser, pass: smtpPass },
  })

  try {
    await transporter.sendMail({
      from: `"Momentous Agency" <${smtpUser}>`,
      to: toEmail,
      replyTo: email,
      subject: `New inquiry from ${firstName} ${lastName}`,
      html: buildHtml(payload),
    })
  } catch (err) {
    console.error("Failed to send email:", err)
    return NextResponse.json({ error: "Failed to send email. Please try again later." }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
