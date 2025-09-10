import sgMail from "@sendgrid/mail";

// Utilidad para tomar el primer valor disponible entre varias claves
const pick = (obj, keys = []) => {
  for (const k of keys) {
    if (obj && Object.prototype.hasOwnProperty.call(obj, k) && obj[k]) return obj[k];
  }
  return undefined;
};

export const handler = async (event) => {
  try {
    const parsed = JSON.parse(event.body || "{}");

    // Netlify envía algo tipo { payload: { data: {...}, ... } }
    const payload = parsed.payload || {};
    const data = payload.data || {};

    // Mezcla de todas las capas posibles por si cambian
    const fields = {
      ...data,
      ...payload,
      ...parsed,
    };

    const name =
      pick(fields, ["name", "Nombre", "fullName", "fullname"]) || "-";

    const email =
      pick(fields, ["email", "Email", "correo", "mail"]) || "-";

    const subject =
      pick(fields, ["subject", "Subject", "asunto", "Asunto"]) ||
      "Solicitud de cotización";

    const message =
      pick(fields, ["message", "Mensaje", "msg", "Message", "comments"]) || "-";

    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const FROM_EMAIL = process.env.FROM_EMAIL; // Single Sender VERIFICADO en SendGrid
    const TO_EMAIL =
      process.env.TO_EMAIL || "ing.civil.arq.ricardo.morales@gmail.com";

    await sgMail.send({
      to: TO_EMAIL,
      from: { email: FROM_EMAIL, name: "RM Engineering – Formulario" },
      // Para que al responder, le respondas al cliente
      replyTo: email !== "-" ? { email, name } : undefined,
      subject: `Nuevo contacto: ${subject}`,
      text:
        `Nombre: ${name}\n` +
        `Email: ${email}\n` +
        `Asunto: ${subject}\n\n` +
        `Mensaje:\n${message}\n`,
      html: `
        <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Helvetica,Arial,sans-serif;line-height:1.5;color:#0f172a">
          <h2 style="margin:0 0 12px">Nuevo contacto desde <strong>RM Engineering</strong></h2>
          <table style="border-collapse:collapse;width:100%;max-width:640px">
            <tr>
              <td style="padding:8px 0;width:120px;color:#475569"><strong>Nombre:</strong></td>
              <td style="padding:8px 0">${escapeHtml(name)}</td>
            </tr>
            <tr>
              <td style="padding:8px 0;color:#475569"><strong>Email:</strong></td>
              <td style="padding:8px 0">${escapeHtml(email)}</td>
            </tr>
            <tr>
              <td style="padding:8px 0;color:#475569"><strong>Asunto:</strong></td>
              <td style="padding:8px 0">${escapeHtml(subject)}</td>
            </tr>
            <tr>
              <td style="padding:8px 0;vertical-align:top;color:#475569"><strong>Mensaje:</strong></td>
              <td style="padding:8px 0;white-space:pre-wrap">${escapeHtml(message)}</td>
            </tr>
          </table>
        </div>
      `,
    });

    return { statusCode: 200, body: "OK" };
  } catch (err) {
    console.error("Email error:", err);
    return { statusCode: 500, body: "Email error" };
  }
};

function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
