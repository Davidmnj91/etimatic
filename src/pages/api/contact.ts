import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import { Constants } from '../../config/constants';

const transporter = nodemailer.createTransport({
  port: 465,
  host: process.env.MAIL_HOST,
  auth: {
    user: Constants.mail,
    pass: process.env.MAIL_PASSWORD,
  },
  secure: true,
});

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const mailData = {
    from: req.body.email,
    to: Constants.mail,
    subject: `Message From ${req.body.name}`,
    html: `<div>${req.body.message}</div><p>Sent from: ${req.body.email}</p>`,
  };

  transporter.sendMail(mailData);

  res.send('Success');
};

export default handler;
