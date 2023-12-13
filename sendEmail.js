import nodemailer from "nodemailer";

async function sendEmail(data) {
  return new Promise((resolve, reject) => {
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
        reject(error);
      } else {
        resolve("Email send sucessfully");
      }
    });
  });
}

export { sendEmail };
