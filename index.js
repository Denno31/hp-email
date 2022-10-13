const express = require("express")
const app = express()
const PORT = process.env.PORT || 5000;
const nodemailer = require("nodemailer")

app.use(express.json())
app.get("/",(req,res)=>{
    res.send('hello world')
})
app.post("/send-email",(req,res)=>{
  console.log(req.body)
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
      res.send("An error occurred")
    } else {
      console.log(info);
      res.send({message:"Email sent successfully"})
    }
  });  
})

app.post("/test",(req,res)=>{
  console.log(req.body)
  res.send("test")
})
  app.listen(PORT,()=>{
    console.log(`app is running on port: ${PORT}`)
  })