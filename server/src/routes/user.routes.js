const Router = require("express");
const userController = require("../controllers/user.controller");

const router = new Router();

router.post("/user", userController.createUser);
router.post("/user/like/:id", userController.sendLike);
router.get("/user/random", userController.getRandomUser);
router.get("/image/:id", userController.getImage);
router.get("/user/:id", userController.getUser);
router.delete("/user/:id", userController.deleteUser);
router.get("/test/:id", userController.test);

module.exports = router;
