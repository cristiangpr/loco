const express = require("express");
const router = express.Router();
const messageController = require("../controllers/messageController");
 router.get("/messages", messageController.index);
 router.get("/messages/new", messageController.new);
 router.post("/messages/create", messageController.create);
 router.get("/messages/:id", messageController.show);
 router.post("/messages/:id/destroy", messageController.destroy);
router.get("/messages/:id/edit", messageController.edit);
 router.post("/messages/:id/update", messageController.update);



module.exports = router;
