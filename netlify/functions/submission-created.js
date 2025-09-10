// netlify/functions/submission-created.js
import sgMail from "@sendgrid/mail";

export const handler = async (event) => {
  try {
    const parsed = JSON.parse(event.body || "{}");
    console.log("Raw event body:", parsed);

    const { payload } = parsed;
    const d = payload?.data || {};

    const name = d.name || "-";
    const email = d.email || "-";
    const subject = d.subject || "Solicitud de cotización";
    const message = d.message || "-";

    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    await sgMail.send({
      to: "ing.civil.arq.ricardo.morales@gmail.com", // tu Gmail (destino)
      from: process.env.FROM_EMAIL,                  // Single Sender verificado en SendGrid
      replyTo: email !== "-" ? email : undefined,
      subject: `Nuevo contacto: ${subject}`,
      text:
        `Nombre: ${name}\n` +
        `Email: ${email}\n\n` +
        `Mensaje:\n${message}\n`,
      html: `
        <h2>Nuevo contacto desde RM Engineering</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Asunto:</strong> ${subject}</p>
        <p><strong>Mensaje:</strong></p>
        <pre style="white-space:pre-wrap">${message}</pre>
      `,
    });

    console.log("Email enviado OK a tu Gmail");
    return { statusCode: 200, body: "OK" };
  } catch (err) {
    console.error("Email error:", err);
    return { statusCode: 500, body: "Email error" };
  }
};
