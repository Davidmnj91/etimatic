import {
  NextApiRequest,
  NextApiResponse,
} from 'next';
import nodemailer from 'nodemailer';

import { Constants } from '../../config/constants';

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: 465,
  secure: true,
  auth: {
    user: Constants.mail,
    pass: process.env.MAIL_PASSWORD,
  },
});

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const mailData = {
    from: req.body.email,
    to: Constants.mail,
    subject: `(WEB) Mensaje de ${req.body.name}`,
    html: `<div>${req.body.message}</div><p>Enviado por: ${req.body.name} (${req.body.email})</p>`,
  };

  try {
    await transporter.sendMail(mailData);
    res.status(200).send('Success');
  } catch(err) {
    console.error(err)
    res.status(500)
  }

};

export default handler;
