const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();

// Middleware para analizar las solicitudes JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Ruta para manejar el envío del formulario
app.post('/enviar-email', (req, res) => {
  const { nombre, correo, telefono, consulta } = req.body;

  // Configuración del transporte del correo electrónico
  const transporter = nodemailer.createTransport({
    // Configura tu proveedor de correo electrónico aquí
    service: 'gmail',
    auth: {
      user: 'tucorreo@gmail.com', // Coloca tu dirección de correo electrónico
      pass: 'tupassword' // Coloca tu contraseña
    }
  });

  // Contenido del correo electrónico
  const mailOptions = {
    from: 'tucorreo@gmail.com', // Coloca tu dirección de correo electrónico
    to: 'correo_destino@example.com', // Coloca el correo electrónico de destino
    subject: 'Consulta de JG & Asociados',
    html: `
      <p>Nombre: ${nombre}</p>
      <p>Correo: ${correo}</p>
      <p>Teléfono: ${telefono}</p>
      <p>Consulta: ${consulta}</p>
    `
  };

  // Enviar el correo electrónico
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error al enviar el correo electrónico');
    } else {
      console.log('Correo electrónico enviado: ' + info.response);
      res.status(200).send('Correo electrónico enviado correctamente');
    }
  });
});

// Iniciar el servidor en el puerto 3001
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
