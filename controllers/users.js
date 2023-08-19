import crypto from 'node:crypto';
import { userModel } from "../models/user.js";


export async function login(req, res) {
    try {
        const { user, password } = req.body;

        const userBD = await userModel.findOne({ user, password });

        if (!userBD.length) {
            return res.status(400).json({
                error: 'Usuario o contraseña incorrectos'
            });
        }

        return res.json({
            data: {
                name: userBD.name,
                idq: userBD.idq
            }
        });
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            error: 'Error al hacer login'
        });
    }
}

export async function getUser(req, res) {
    try {
        const { idq: idqOrigin, password } = req.body;
        const { idq: idqDestiny } = req.params;

        // TODO: hacer validaciones
        const userOrigin = await userModel.find({ idq: idqOrigin, password });
        console.log(userOrigin);
        if (!userOrigin.length) {
            return res.status(400).json({
                error: 'Usuario no válido'
            });
        }

        const userDestiny = await userModel.find({ idq: idqDestiny });
        
        if (!userDestiny.length) {
            return res.status(400).json({
                error: 'Usuario no encontrado'
            });
        }

        return res.json({
            data: userDestiny
        });
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            error: 'Error al obtener usuario'
        });
    }
}

export async function newUser(req, res) {
    try {
        const {
            user,
            password,
            name,
            email,
            img
        } = req.body;
    
        // Hacer aquí las validaciones para insertar en BD
    
        const userBD = await userModel.create({ 
            user,
            password,
            idq: crypto.randomUUID(),
            name,
            email,
            img: 'test',
            trustedContacts: [],
            type: 'normal'
        });
    
        return res.json({
            data: userBD
        });
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            error: 'Error al crear usuario'
        });
    }
}