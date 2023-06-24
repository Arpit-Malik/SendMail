const nodemailer = require("nodemailer");


const sendMail = async(req , res) => {
    let testAccount = await nodemailer.createTestAccount();

    let transporter = await nodemailer.createTransport({

        host: "smtp.forwardemail.net",
        port: 465,
      
        auth: {
           
          user: 'chelsea.rohan63@ethereal.email',
          pass: 'G8P8tJtjyqeK1ppFGX'
        }
    });

        let info = await transporter.sendMail({
            from: '"meee arpit 👻" <arpit2gmail.com>', // sender address
            to: "romanrane62@gmail.com", // list of receivers
            subject: "Hello meee✔", // Subject line
            text: "Hello world? yooo", // plain text body
            html: "<b>Hello world  meee</b>", // html body
          });    


          console.log("Message sent: %s", info.messageId);
          res.json(info);






    }

