import * as nodeMailer from 'nodemailer';

const EMAIL = process.env['GMAIL_EMAIL'];
const PASSWORD = process.env['GMAIL_PASSWORD'];

let transporter = null;

export const sendMail = async (payload) => {
	try {
		if (!transporter) {
			transporter = nodeMailer.createTransport({
				service: 'gmail',
				auth: { user: EMAIL, pass: PASSWORD }
			});
		}
	} catch (e) {
		console.error('Failed setup transporter, please check auth or email');
	}

	const mailOptions = {
		to: EMAIL,
		subject: `청첩장에 ${payload.name}님의 방명록`,
		html: `${payload.name}님이 ${payload.content}라고 방명록을 남겼습니다.`
	};
	await transporter.sendMail(mailOptions);
};
