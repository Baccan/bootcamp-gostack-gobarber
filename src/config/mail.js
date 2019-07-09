// protocolos smtp
export default {
  host: 'smtp.mailtrap.io',
  port: '2525',
  // certificado ssl?
  secure: false,
  auth: {
    user: '05b699efed637d',
    pass: '309f02e893f20a',
  },
  // padrão para todos os emails
  default: {
    from: 'Equipe GoBarber <noreply@gobarber.com>',
  },
};

/**
 * Serviçoes de e-mail para a plicação em produção:
 * Amazon SES
 * Mailgun
 * Sparkpost
 * Mandril(Mailchimp)
 */

//  Mailtrap (DEV)
