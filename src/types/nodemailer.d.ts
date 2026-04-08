declare module "nodemailer" {
  import type * as SMTPTransport from "nodemailer/lib/smtp-transport";
  import type * as Mail from "nodemailer/lib/mailer";
  const nodemailer: {
    createTransport(options: SMTPTransport.Options): Mail.Logger;
    createTransport(options: SMTPTransport.TransporterOptions): Mail.Logger;
    createTestAccount(): Promise<any>;
  };
  export default nodemailer;
}
