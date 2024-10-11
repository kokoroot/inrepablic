// pages/api/contact.js
import nodemailer from 'nodemailer';

export default async function handler(req: any, res: any) {
  if (req.method === 'POST') {
    const { name, email, phoneNumber, message } = req.body;

    // Відправка повідомлення на пошту
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: '0makovskyi@gmail.com',
        pass: 'vitalic007',
      },
    });

    const mailOptions = {
      from: 'jwh99533@omeie.com',
      to: '0makovskyi@gmail.com',
      subject: 'New Contact Form Submission',
      text: `Name: ${name}\nEmail: ${email}\nPhone Number: ${phoneNumber}\nMessage: ${message}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Форма успішно відправлена' });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ message: 'Помилка при відправці електронного листа' });
    }
  } else {
    res.status(405).end(); // Метод не підтримується
  }
}
