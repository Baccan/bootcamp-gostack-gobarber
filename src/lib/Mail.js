import nodemailer from 'nodemailer';
import mailConfig from '../config/mail';

class Mail {
  constructor() {
    const { host, port, secure, auth } = mailConfig;

    this.transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      // se existe forma de autenticação ou não
      auth: auth.user ? auth : null,
    });
  }

  sendMail(message) {
    return this.transporter.sendMail({
      // tudo oq está dentro de mailConfig e message
      ...mailConfig.default,
      ...message,
    });
  }
}

export default new Mail();
