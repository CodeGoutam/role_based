const express = require('express')
const users = require('./UserSchema')
const router = express.Router()

router.post("/admin", async (req, res) => {
    let check = await users.find({})
    if (check !== null) {
        check = check;
        console.log("check value", check);
        res.send(check)
    }
    else {
        res.send({ success: false })
    }
})
module.exports = router