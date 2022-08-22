var express = require("express")
var router = express.Router()
let controller = require("../controller/index")
router.get('/',(req, res) => {
    controller.UserController.getUser(req,res)
})

module.exports = router;