import { Router } from "express";
import { createUsers, getUserById, getUsers } from "../handlers/users";

const router = Router();

// http://localhost:3000/api/users
router.get("/", getUsers);

// http://localhost:3000/api/users/1
router.get("/:id", getUserById);

// http://localhost:3000/api/users
router.post("/", createUsers);

export default router;
