const { Resend } = require('resend');

exports.handler = async function(event, context) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { name, email, subject, message } = JSON.parse(event.body);

  try {
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'abdullahkamboh7117@gmail.com',
      subject: subject,
      html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
    });

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify(error),
    };
  }
};
