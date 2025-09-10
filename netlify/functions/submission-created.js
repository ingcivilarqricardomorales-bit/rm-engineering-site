import sgMail from "@sendgrid/mail";

const get = (obj, keys) => {
  for (const k of keys) if (obj && obj[k]) return String(obj[k]);
  return "";
};
const esc = (s) =>
  String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

export const handler = async (event) => {
  try {
    const { SENDGRID_API_KEY, MAIL_TO, MAIL_FROM } = process.env;
    if (!SENDGRID_API_KEY || !MAIL_TO || !MAIL_FROM) {
      return { statusCode: 500, body: "Faltan variables de entorno" };
    }
    sgMail.setApiKey(SENDGRID_API_KEY);

    const parsed = JSON.parse(event.body || "{}");
    const payload = parsed?.payload || {};
    const data = payload?.data || {}; // <-- campos del formulario

    // Campos (tolerante a variantes)
    const name = get(data, ["name", "nombre", "full_name"]) || "-";
    const email = get(data, ["email", "correo", "replyto"]) || "-";
    const subject = get(data, ["subject", "asunto"]) || "Nuevo mensaje";
    const message = get(data, ["message", "mensaje", "body"]) || "-";

    await sgMail.send({
      to: MAIL_TO,
      from: MAIL_FROM,
      replyTo: email !== "-" ? email : undefined,
      subject: `Contacto: ${subject}`,
      html: `
        <h2>Nuevo contacto desde <strong>RM Engineering</strong></h2>
        <p><strong>Nombre:</strong> ${esc(name)}</p>
        <p><strong>Email:</strong> ${esc(email)}</p>
        <p><strong>Asunto:</strong> ${esc(subject)}</p>
        <p><strong>Mensaje:</strong></p>
        <pre style="white-space:pre-wrap">${esc(message)}</pre>
      `,
    });

    return { statusCode: 200, body: "OK" };
  } catch (e) {
    console.error("Email error:", e);
    return { statusCode: 500, body: "Email error" };
  }
};
