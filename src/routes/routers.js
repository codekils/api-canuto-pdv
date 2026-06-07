const { Router } = require("express");
const router = Router();
const loginhandler = require("../controllers/loginHandler");

router.post("/login", loginhandler);

module.exports = router;
