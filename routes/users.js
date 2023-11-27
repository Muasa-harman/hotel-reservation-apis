import express  from "express";
import * as usersController from '../controllers/usersController.js'

const router = express.Router();

router.put("/:id", usersController.updateUser)
router.delete("/:id", usersController.deleteUser)
router.get("/:id", usersController.getUser)
router.get("/", usersController.getAllUsers)


export default router