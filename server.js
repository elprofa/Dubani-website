const express = require("express");
const next = require("next");
const bodyParser = require('body-parser');
const sendinblue = require('./pages/api/sendinblue');

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();
    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(3000, (err) => {
      if (err) throw err;
      console.log("> Ready on http://localhost:3000");
    });

    server.use(bodyParser.json()).post('/api/email', (req, res) => {
        const { msg = '' } = req.body;
        let sendSmtpEmail = {
          to: [{
              email: 'youremail@youremail.com' 
          }],
          templateId: 1,
          params: {
            name: 'Malith',
            subject: 'Someone sent you a link',
            text: msg,
        },
        };
        sendinblue(sendSmtpEmail)
        res.send('success');
      });

  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });

