// Routes to handle get render requests
import { Router } from "express";
// TODO: Remove this import
import QRCode from "qrcode";

export const router = Router();

router.get("/", (req, res) => {
	res.render("index");
});

router.get("/login", (req, res) => {
	res.render("login");
});

router.get("/register", (req, res) => {
	res.render("register");
});

router.get("/admin", (req, res) => {
	// TODO: add validation to check if user is admin
	res.render("admin");
});

// TODO: move to separate file
// router.get("/logout", (req, res) => {
// 	req.session.destroy();
// 	res.redirect("/");
// });

router.get("/panel/viewQR", async (req, res) => {
	// TODO: add validation to check if user is basic
	await QRCode.toDataURL("https://api.whatsapp.com")
		.then((url) => {
			res.render("panel/viewQR", { url });
		})
		.catch((err) => {
			console.error(err);
		});
});

router.get("panel/viewDocs", (req, res) => {
	// TODO: add validation to check if user is basic
	
    res.render("panel/viewDocs");
});

router.get("panel/updateDocs", (req, res) => {
	// TODO: add validation to check if user is basic
	res.render("panel/updateDocs");
});
