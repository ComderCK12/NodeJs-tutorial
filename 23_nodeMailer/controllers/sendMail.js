const nodemailer = require('nodemailer');

const sendMail = async (req, res) => {

    let testAccount = await nodemailer.createTestAccount();
    

    // connect with smtp
    let transporter = await nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        auth: {
            // user: testAccount.user,             // generated ethereal user
            // pass: testAccount.pass,             // generated ethereal password

            user: 'norberto21@ethereal.email',
            pass: 'Hzs1r9WP1ARGe6FW5t'
        }
    });

    let info = await transporter.sendMail({
        from: '"Secret user: " <secretuser@gmail.com>',
        to: 'anonymus@gmail.com',
        subject: 'Hello',
        text: 'This is sent via sendMailer',
        html: '<h1>Hello there !</h1>'
    });

    console.log("Message sent: %s", info.messageId)
    res.json(info)


    res.send('I am sending mail')
};

module.exports = sendMail;