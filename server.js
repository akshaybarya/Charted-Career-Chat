const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv/config");
const db = require("./config/db");
const User = require("./models/User");
const app = express();

/* MIDDLEWARES */
app.use(express.json());
app.use(cors());
db();

/*  NODEMAILER */

const sendMail = async ({ name, email, phone }) => {
  const transporter = nodemailer.createTransport({
    port: process.env.MAIL_PORT,
    host: process.env.HOST,
    auth: {
      user: process.env.USER,
      pass: process.env.PASSWORD,
    },
    secure: true,
  });

  const mailData = {
    from: "evotingsystem33@gmail.com", // sender address
    to: "akshaybarya@gmail.com", // list of receivers
    subject: "New User Registered for Program",
    text: `Name: ${name}  Email: ${email} Phone: ${phone}`,
    html: `<b>Hey there! </b> <br> A new user just registered!<br/> <br> Name: ${name}<br/> <br> Email: ${email}<br/>  <br> Phone: ${phone}<br/>`,
  };

  transporter.sendMail(mailData, function (err, info) {
    if (err) {
      console.error(err.message);
    } else {
      transporter.close();
    }
  });
};

/* ROUTES */

app.get("/", (req, res) => {
  res.send("Working!");
});

app.post(`/api/user`, async (req, res) => {
  try {
    //await sendMail(req.body);
    const { email, name, phone } = req.body;

    let user = await User.findOne({ email: email, phone: phone });

    if (user && user.isCalled === true) {
      /* Deleting previous entry of the user */
      await User.deleteOne({ _id: user._id });
      user = null;
    }

    if (user) {
      res.send("We will contact you soon.");
    }
    user = new User({
      name: name,
      email: email,
      phone: phone,
      isCalled: false,
    });

    await user.save();
    res.send("Registered Sucessfully");
  } catch (error) {
    console.error(error.message);
  }
});

/* SERVER */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
