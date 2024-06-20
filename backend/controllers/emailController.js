// controllers/emailController.js
const sendEmail = require('./NodeMailer');

exports.sendEmailHandler = async (req, res) => {
  const { to, subject, email, message } = req.body;

  if (!subject || !email || !message) {
    return res.status(400).json({ message: 'Please fill all the fields' });
  }

  try {
    const info = await sendEmail(
      to,
      email,
      subject,
      message,
      `<p>${message}</p>`
    );
    res.status(200).json({ message: 'Email sent successfully', info });
  } catch (error) {
    res.status(500).json({ message: 'Error sending email', error });
  }
};

