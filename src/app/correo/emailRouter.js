require('dotenv').config();

const nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
 service: 'gmail',
 auth: {
 user: 'joaopintotovar2000@gmail.com', // Cambialo por tu email
 pass: 'travys12345' // Cambialo por tu password
 }
 });

const mailOptions = {
 from: 'v.rujana@correo.unimet.edu.ve',
 to: 'v.rujana@correo.unimet.edu.ve', // Cambia esta parte por el destinatario
 subject: "prueba",
 html: "it workd"
 };

transporter.sendMail(mailOptions, function (err, info) {
 if (err)
 console.log("paso algo mal")
 else
 console.log(info);
 });
