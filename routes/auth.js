import { Router } from "express";
import { login } from "../controllers/users.js";

export const router = Router();

router.get("/login", login);