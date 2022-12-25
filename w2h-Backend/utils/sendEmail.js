const nodeMailer = require("nodemailer");

const sendEmail = async (options) => {
  console.log("options", process.env.SMPT_HOST);
  console.log("options", process.env.SMPT_MAIL);
  console.log("options", process.env.SMPT_PASSWORD);
  const transporter = nodeMailer.createTransport({
    host: process.env.SMPT_HOST,
    port: process.env.SMPT_PORT,
    secure: true,
    service: process.env.SMPT_SERVICE,
    auth: {
      user: process.env.SMPT_MAIL,
      pass: process.env.SMPT_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.SMPT_MAIL,
    to: options.Email,
    subject: options.subject,
    text: options.message,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
