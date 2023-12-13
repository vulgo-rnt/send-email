import nodemailer from "nodemailer";

async function sendEmail(data) {
  const { email, subject, text } = data;
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    subject: subject,
    text: `Email: ${email} Message: ${text}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Email send: " + info.response);
    }
  });
}

export { sendEmail };
