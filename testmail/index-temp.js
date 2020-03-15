const nodemailer = require('nodemailer');

var auth = {
    type: 'oauth2',
    user: '### your gmail address ###',
    clientId: '### client ID ###',
    clientSecret: '### client secret ###',
    refreshToken: '### refresh token ###',
};

var mailOptions = {
    from: 'it.tinhngo@gmail.com',
    to: 'gjundat2@gmail.com',
    subject: 'sample subject',
    text: 'sample text',
    html: '<b>sample html</b>',
};

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: auth,
});

transporter.sendMail(mailOptions, (err, res) => {
    if (err) {
        return console.log(err);
    } else {
        console.log(JSON.stringify(res));
    }
});