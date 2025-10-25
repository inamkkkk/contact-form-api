const { sendEmail } = require('../utils/emailService');

exports.submitForm = async (req, res, next) => {
  try {
    const { name, email, message } = req.body;

    await sendEmail({
      from: email,
      to: process.env.RECIPIENT_EMAIL,
      subject: 'New Contact Form Submission',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    next(error);
  }
};