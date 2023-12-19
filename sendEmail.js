import nodemailer from "nodemailer";

async function sendEmail(data) {
  return new Promise((resolve, reject) => {
    const { email, subject, message, name } = data;
    console.log(data);
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
      text: `Email: ${email} Name: ${name} Message: ${message}`,
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
