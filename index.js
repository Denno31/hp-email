const express = require("express")
const app = express()
const PORT = process.env.PORT || 5000;
const nodemailer = require("nodemailer")
app.get("/",(req,res)=>{
    res.send('hello world')
})
app.post("/send-email",(req,res)=>{
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: "denniskyn80@gmail.com",
      pass: "sjtmruvqdsihaset",
    },
  });
  
  let mailOptions = {
    from: 'denniskyn80@gmail.com',
    to: "danyonje.da.da@gmail.com",
    subject: `The subject goes here`,
    html: `<body>${req.body.message}</body>`,
  };
  
  transporter.sendMail(mailOptions, function (err, info) {
    if (err) {
      console.log(err)
    } else {
      console.log(info);
    }
  });  
})


  app.listen(PORT,()=>{
    console.log(`app is running on port: ${PORT}`)
  })