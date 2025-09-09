<form
  name="contact"
  method="POST"
  data-netlify="true"
  netlify-honeypot="bot-field"
  action="/success.html"
  className="space-y-4"
>
  <input type="hidden" name="form-name" value="contact" />
  <p className="hidden"><input name="bot-field" /></p>

  <input name="name" placeholder="Nombre" required />
  <input type="email" name="email" placeholder="Email" required />
  <input name="subject" placeholder="Asunto" />
  <textarea name="message" placeholder="Mensaje" required />
  
  <button type="submit">Enviar solicitud</button>
</form>
