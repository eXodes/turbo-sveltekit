import { MAIL_HOST, MAIL_PASSWORD, MAIL_USERNAME } from "$env/static/private";
import type { Actions, PageServerLoad } from "./$types";
import nodemailer from "nodemailer";
import { createEmail, emailList, sendEmail } from "svelte-email-tailwind/preview";

export const load: PageServerLoad = async () => {
  const previewData = emailList();

  return {
    previewData,
  };
};

export const actions: Actions = {
  ...createEmail,
  ...sendEmail({
    customSendEmailFunction: async ({ from, to, subject, html }) => {
      const transporter = nodemailer.createTransport({
        host: MAIL_HOST,
        port: 2525,
        secure: false,
        auth: {
          user: MAIL_USERNAME,
          pass: MAIL_PASSWORD,
        },
      });

      try {
        await transporter.sendMail({ from, to, subject, html });

        return { success: true };
      } catch (err) {
        return { success: false, error: err };
      }
    },
  }),
};
