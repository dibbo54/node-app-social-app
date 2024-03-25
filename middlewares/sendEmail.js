const nodemailer = require("nodemailer");

exports.sendEmail = async (options) => {
  var transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "9e49ce83171f10",
      pass: "84ac8e08fba34b"
    }
  });
  const mailOptions = {
    from: process.env.SMPT_MAIL,
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  await transporter.sendMail(mailOptions);
};
