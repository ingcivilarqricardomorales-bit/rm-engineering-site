import sgMail from "@sendgrid/mail";

export const handler = async (event) => {
  try {
    const payload = JSON.parse(event.body).payload;
    const d = payload.data || {};
    const name = d.name || "-";
    const email = d.email || "-";
    const subject = d.subject || "Solicitud de cotización";
    const message = d.message || "-";

    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    await sgMail.send({
      to: process.env.TO_EMAIL,           // Gmail destino
      from: process.env.FROM_EMAIL,       // remitente verificado
      replyTo: email !== "-" ? email : undefined,
      subject: `Nuevo contacto: ${subject}`,
      text: `Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`,
    });

    return { statusCode: 200, body: "OK" };
  } catch (e) {
    console.error(e);
    return { statusCode: 500, body: "Email error" };
  }
};
