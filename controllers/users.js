import { userModel } from "../models/user.js";

export async function getUser(req, res) {
    // TODO: hacer validaciones
    const user = await userModel.find({ idq: req.params.idq })
    res.json(user);
}