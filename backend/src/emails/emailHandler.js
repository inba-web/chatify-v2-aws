import { createWelcomeEmailTemplate } from "../emails/emailTemplate.js";
import { smtpClient } from "../lib/smtp.js";

export const sendWelcomeEmail = async (email, name, clientURL) => {
  try {
    await smtpClient.sendMail({
      from: `"INBAVARUNAN S" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Welcome to Chatify! 🎉",
      html: createWelcomeEmailTemplate(name, clientURL),
    });

    console.log("Welcome email sent");
  } catch (err) {
    console.error("Email failed:", err);
  }
};