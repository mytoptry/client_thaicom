const express = require("express");
const router = express.Router();
const models = require("../models");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

// GET ------------------------------------------------------------
router.post("/get-sign", async (req, res) => {
    try {
        let result = await models.users.findAll({
            attributes: [
                "userId"
            ],
            where: {
                username: req.body.value.username,
                password: req.body.value.password,
                isActive: 1
            }
        });

        res.json({
            isSuccess: true,
            formData: result
        });
    } catch (err) {
        res.json({
            isSuccess: false,
            formData: null
        });
        console.log("get-sign: ", err);
    }
});

module.exports = router;