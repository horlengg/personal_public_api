import nodemailer from "nodemailer"
import { authPwd, authEmail } from "../app.config.js";

export function useEmailHelper() {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: authEmail,
      pass: authPwd,
    },
  });

  const send = async () => {
    const info = await transporter.sendMail({
      from: `${authEmail}`, // must match authEmail
      to: "ly.horleng01@gmail.com",
      subject: "Message from nodemailer!.",
      text: `
        "headEulerAngleX": -6.932424545288086,
        "headEulerAngleY": -0.5047948956489563,
        "headEulerAngleZ": 3.6630051136016846,
        "smilingProbability": 0.539508044719696,
        "leftEyeOpenProbability": 0.9952254295349121,
        "rightEyeOpenProbability": 0.9974306225776672,
        "trackingId": 1,
      `,
    //   html: "<b>Hello world?</b>",
    });

    console.log("Message sent:", info.messageId);
    console.log("Preview URL:", nodemailer.getTestMessageUrl(info));
  };

  return { send };
}
