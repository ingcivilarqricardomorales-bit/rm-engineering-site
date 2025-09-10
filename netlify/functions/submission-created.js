import sgMail from "@sendgrid/mail";

export const handler = async (event) => {
  try {
    const { payload } = JSON.parse(event.body);

    // Netlify manda los datos dentro de payload.data
    const d = payload?.data || {};

    const name = d.name || "(no proporcionado)";
    const email = d.email || "(no proporcionado)";
    const subject = d.subject || "Solicitud de cotización";
    const message = d.message || "(sin mensaje)";

    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    await sgMail.send({
      to: "ing.civil.arq.ricardo.morales@gmail.com", // 👈 tu Gmail directo
      from: process.env.FROM_EMAIL, // 👈 el correo verificado en SendGrid
      replyTo: email !== "(no proporcionado)" ? email : undefined,
      subject: `Nuevo contacto: ${subject}`,
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
