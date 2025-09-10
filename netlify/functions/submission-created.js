import sgMail from "@sendgrid/mail";

export const handler = async (event) => {
  try {
    // Netlify Forms -> Form submission payload
    const { payload } = JSON.parse(event.body);
    const d = payload?.data || {};

    const name = d.name || "-";
    const email = d.email || "-";
    const subject = d.subject || "Solicitud de cotización";
    const message = d.message || "-";

    // Configura tu API Key de SendGrid en Netlify → Environment Variables
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    await sgMail.send({
      to: "ing.civil.arq.ricardo.morales@gmail.com", // destino fijo a tu Gmail
      from: process.env.FROM_EMAIL,                 // remitente (Single Sender verificado en SendGrid)
      replyTo: email !== "-" ? email : undefined,   // quien escribió el formulario
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
