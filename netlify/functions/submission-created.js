// netlify/functions/submission-created.js
import sgMail from "@sendgrid/mail";

export const handler = async (event) => {
  try {
    const { payload } = JSON.parse(event.body);

    // 🔹 Algunos formularios llegan en payload.data y otros directo en payload
    const d = payload?.data || payload || {};

    const name = d.name || "(no proporcionado)";
    const email = d.email || "(no proporcionado)";
    const subject = d.subject || "Solicitud de cotización";
    const message = d.message || "(sin mensaje)";

    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    await sgMail.send({
      to: "ing.civil.arq.ricardo.morales@gmail.com", // tu destino fijo
      from: process.env.FROM_EMAIL,                 // remitente verificado en SendGrid
      replyTo: email !== "(no proporcionado)" ? email : undefined,
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

    return { statusCode: 200, body: "OK" };
  } catch (err) {
    console.error("Email error:", err);
    return { statusCode: 500, body: "Email error" };
  }
};
