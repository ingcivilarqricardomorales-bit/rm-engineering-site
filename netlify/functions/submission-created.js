import sgMail from "@sendgrid/mail";

const pick = (obj, keys=[]) => {
  for (const k of keys) if (obj && obj[k]) return obj[k];
  return undefined;
};
const escapeHtml = (s) => String(s)
  .replaceAll("&","&amp;").replaceAll("<","&lt;")
  .replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;");

export const handler = async (event) => {
  try {
    const parsed  = JSON.parse(event.body || "{}");
    const payload = parsed.payload || {};
    const data    = payload.data || {};
    const fields  = { ...data, ...payload, ...parsed };

    const name    = pick(fields, ["name","Nombre","fullName"]) || "-";
    const email   = pick(fields, ["email","Email","correo"])    || "-";
    const subject = pick(fields, ["subject","Subject","asunto"])|| "Solicitud de cotización";
    const message = pick(fields, ["message","Mensaje","msg"])   || "-";

    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    await sgMail.send({
      to: process.env.TO_EMAIL || "ing.civil.arq.ricardo.morales@gmail.com",
      from: { email: process.env.FROM_EMAIL, name: "RM Engineering – Formulario" },
      replyTo: email !== "-" ? { email, name } : undefined,
      subject: `Nuevo contacto: ${subject}`,
      html: `
        <h2>Nuevo contacto desde <strong>RM Engineering</strong></h2>
        <p><strong>Nombre:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Asunto:</strong> ${escapeHtml(subject)}</p>
        <p><strong>Mensaje:</strong></p>
        <pre style="white-space:pre-wrap">${escapeHtml(message)}</pre>
      `,
    });
    return { statusCode: 200, body: "OK" };
  } catch (e) {
    console.error("Email error:", e);
    return { statusCode: 500, body: "Email error" };
  }
};
