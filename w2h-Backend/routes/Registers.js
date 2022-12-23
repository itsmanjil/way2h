const router = require("express").Router();
let Reg = require("../models/Register");
const generateToken = require("../utils/generateToken");

//localhost:8070/Register/add

http: router.route("/add").post((req, res) => {
  const Name = req.body.Name;
  const Email = req.body.Email;
  const Num = req.body.Num;
  const Password = req.body.Password;
  const reward = req.body.reward;

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

router.route("/login").post((req, res) => {
  const Email = req.body.Email;
  const Password = req.body.Password;

  Reg.findOne({ Email: Email, Password: Password })
    .then((Registers) => {
      if (Registers == null) {
        success: false;
      } else {
        success: true;

        res.json({
          id: Registers._id,
          Name: Registers.Name,
          Email: Registers.Email,
          reward: Registers.reward,
          Password: Registers.Password,
          Num: Registers.Num,
          token: generateToken(Registers._id),
        });
      }
    })
    .catch((err) => {
      res.json("Validation Faild");
    });
});

module.exports = router;
