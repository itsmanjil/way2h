const express = require('express');
const Commentsection = require('../models/comment');

const router =express.Router();

router.post('/',async(req, res) =>
{
    let newdata = new Commentsection(req.body);
    await newdata.save();
    return res.json(newdata);
})

module.exports = router
