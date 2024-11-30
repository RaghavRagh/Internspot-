import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "radwimps187@gmail.com",
    pass: "",
  },
});

export const sendMail = (to, subject, text, html) => {
  const mailOptions = {
    from: "radwimps187@gmail.com",
    to,
    subject,
    text,
    html,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Email sent: " + info.response);
  });
};
