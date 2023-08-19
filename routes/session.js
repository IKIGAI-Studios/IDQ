// Routes to handle session requests
import { Router } from "express";
import { loginFetch, registerFetch } from "../controllers/apiRequest.js";

export const router = Router();

// login
router.post("/login", (req, res) => {
	// TODO: fetch to API to login
	try {
		const { user, password } = req.body;
		const response = loginFetch(user, password);
		res.json(response);
	} catch (error) {
		res.json({
			error: error,
		});
	}
});

// register
router.post("/register", (req, res) => {
	// TODO: fetch to API to register
	try {
		const { user, password, name, email, img } = req.body;
		const response = registerFetch(user, password, name, email, img);
		res.json(response);
	} catch (error) {
		res.json({
			error: error,
		});
	}
});

// logout
router.get("/logout", (req, res) => {
	req.session.destroy();
	res.redirect("/");
});
