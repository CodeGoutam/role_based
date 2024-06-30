const express = require('express')
const users = require('./UserSchema')
const router = express.Router()

router.post("/client", async (req, res) => {
    const check = await users.findOne({ _id: req.body.id })
    console.log("check value", check);
    if (check !== null) {
        res.send({ success: true, userDetail: check })
    }
    else {
        res.send({ success: false })
    }
})
module.exports = router