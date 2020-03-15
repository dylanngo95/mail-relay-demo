var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');

var mailOptions = {
    from: 'demo@gmail.com',
    to: 'it.demo@gmail.com',
    subject: 'sample subject',
    text: 'sample text',
    html: '<b>sample html</b>',
};

var transporter = nodemailer.createTransport(smtpTransport({
    host: 'localhost',
    port: 1025,
    secure: false,
    tls: {
        rejectUnauthorized: false
    },
}));

transporter.sendMail(mailOptions, (err, res) => {
    if (err) {
        return console.log(err);
    } else {
        console.log(JSON.stringify(res));
    }
});