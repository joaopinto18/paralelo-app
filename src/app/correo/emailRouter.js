require('dotenv').config();

const nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
 service: 'gmail',
 auth: {
 user: 'v.rujana@correo.unimet.edu.ve', // Cambialo por tu email
 pass: '' // Cambialo por tu password
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
