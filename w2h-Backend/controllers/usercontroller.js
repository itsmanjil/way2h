const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const User = require("../models/Register");
const sendToken = require("../utils/jwtToken");
const sendEmail = require("../utils/sendEmail.js");
const crypto = require("crypto");

//fuction for forget password

exports.forgotPassword = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findOne({ Email: req.body.Email });

  console.log("user", user);

  if (!user) {
    return next(new ErrorHandler("User not found", 404));
  }

  //get reset pasword token
  const resetToken = user.getResetPasswordToken();

  console.log("token", resetToken);

  await user.save({ validateBeforeSave: false });

  // const resetPasswordUrl = `${process.env.FRONTEND_URL}/password/reset/${resetToken}`;
  const resetPasswordUrl = `${process.env.FRONTEND_URL}/password/reset/${resetToken}`;

  const message = `Your Password Reset Token is ttemp: -\n\n${resetPasswordUrl}\n\nIf you have not requested this email then please ignore it`;

  try {
    await sendEmail({
      Email: user.Email,
      subject: "ShopWisely Password Recovery",
      message,
    });
    res.status(200).json({
      success: true,
      message: `Email sent to${user.Email} Sucesfully`,
    });
  } catch (error) {
    user.resetPasswordToken = undefined;
    user.resetPaswordExpire = undefined;

    await user.save({ validateBeforeSave: false });

    return next(new ErrorHandler(error.message, 500));
  }
});

// Reset Password
exports.resetPassword = catchAsyncErrors(async (req, res, next) => {
  // creating token hash
  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");

  const resetPasswordExpire = Date.now();
  console.log("resetToken", resetPasswordToken);
  console.log("resetToken expire", resetPasswordExpire);

  const user = await User.findOne({
    resetPasswordToken,
    resetPasswordExpire: { $gt: Date.now() },
  });

  console.log("user 99", req.params.token);

  if (!user) {
    return next(
      new ErrorHandler(
        "Reset Password Token is invalid or has been expired",
        400
      )
    );
  } else {
    if (req.body.password !== req.body.confirmPassword) {
      return next(new ErrorHandler("Password is invalid", 400));
    }

    console.log(req.body.password);
    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save();

    sendToken(user, 200, res);
  }
});