import type { NextApiRequest, NextApiResponse } from 'next';
import { EmailTemplate } from '../../components/email-template';
import { Resend } from 'resend';

const resend = new Resend('re_YPnRqeDo_Fvmd1mg6aFrVdRyV3tLJt5jr');

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const data = await resend.emails.send({
      from:  'Acme <onboarding@resend.dev>',
      to: ['resend@pearlthoughts.com'],
      subject: 'Test Dev Arsalan',
      react: EmailTemplate({ firstName: 'arsalan' }),
    });

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
};
