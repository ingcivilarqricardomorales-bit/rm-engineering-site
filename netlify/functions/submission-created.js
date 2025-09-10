import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function handler(event) {
  try {
    const data = JSON.parse(event.body);

    const msg = {
      to: "tu-correo@gmail.com", // 📩 Reemplaza con el correo donde quieres recibir los mensajes
      from: "no-reply@rm-engineering-site.com", // puede ser un fake sender (SendGrid lo acepta sin dominio)
      subject: `Nuevo mensaje de ${data.name}`,
      text: `
        Nombre: ${data.name}
        Email: ${data.email}
        Asunto: ${data.subject}
        Mensaje: ${data.message}
      `,
      html: `
        <h3>Nuevo mensaje desde tu formulario</h3>
        <p><strong>Nombre:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Asunto:</strong> ${data.subject}</p>
        <p><strong>Mensaje:</strong> ${data.message}</p>
      `,
    };

    await sgMail.send(msg);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Correo enviado con éxito ✅" }),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Error al enviar el correo ❌" }),
    };
  }
}
