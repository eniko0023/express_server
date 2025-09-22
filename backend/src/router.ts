import { Router } from "express";
import { getAll, deleteUser, addUser, updateUser, getCurrentUser } from "./controller.js";

const router = Router();

router.get("/users", getAll);
router.delete("/users/:id", deleteUser);
router.post("/users", addUser);
router.patch("/users/:id", updateUser);
router.put("/users:id", updateFullUser);
router.get("/users:id", getCurrentUser);

export default router;