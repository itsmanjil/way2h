const router = require("express").Router();
let Reg = require("../models/Register");
const generateToken = require("../utils/generateToken");

//localhost:8070/Register/add

const {
  forgotPassword,
  resetPassword,
} = require("../controllers/usercontroller");

router.route("/password/forgot").post(forgotPassword);

router.route("/password/reset/:token").put(resetPassword);

http: router.route("/add").post((req, res) => {
  const Name = req.body.Name;
  const Email = req.body.Email;
  const Num = req.body.Num;
  const Password = req.body.Password;
  const confirmPassword = req.body.confirmPassword;
  const reward = req.body.reward;

  // Check that password and confirmPassword match
  if (Password !== confirmPassword) {
    return res
      .status(400)
      .json({ error: "Password and confirm password do not match" });
  }

  // Check if email already exists in the database
  Reg.findOne({ Email: Email }, (err, email) => {
    if (email) {
      return res.status(400).json({ error: "Email already exists" });
    }

    const NewAdd = new Reg({
      Name,
      Email,
      Password,
      Num,
      reward,
    });

    NewAdd.save()
      .then(() => {
        res.json("Registration Added");
      })
      .catch((err) => {
        console.log(err);
        res.json(err);
        console.log("reg err");
      });
  });
});

router.route("/login").post((req, res) => {
  const Email = req.body.Email;
  const Password = req.body.Password;

  Reg.findOne({ Email: Email, Password: Password })
    .then((Registers) => {
      if (!Registers) {
        return res.status(400).json({ error: "Invalid email or password" });
      }

      res.json({
        id: Registers._id,
        Name: Registers.Name,
        Email: Registers.Email,
        reward: Registers.reward,
        Password: Registers.Password,
        Num: Registers.Num,
        role: Registers.role,
        token: generateToken(Registers._id),
      });
    })
    .catch((err) => {
      res.status(500).json({ error: "Internal server error" });
    });
});

router.route("/user/:id").get((req, res) => {
  const userId = req.params.id;

  Reg.findById(userId)
    .then((Registers) => {
      if (!Registers) {
        return res.status(404).json({ error: "User not found" });
      }

      res.json({
        id: Registers._id,
        Name: Registers.Name,
        Email: Registers.Email,
        reward: Registers.reward,
        Password: Registers.Password,
        Num: Registers.Num,
        role: Registers.role,
      });
    })
    .catch((err) => {
      res.status(500).json({ error: "Internal server error" });
    });
});

module.exports = router;
