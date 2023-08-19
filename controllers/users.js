import crypto from 'node:crypto';
import { userModel } from "../models/user.js";


export async function login(req, res) {
    try {
        const { user, password } = req.body;

        const userBD = await userModel.findOne({ user, password });

        if (!userBD) {
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

        // TODO: hacer validaciones para traer los datos sensibles y no sensibles
        const userOrigin = await userModel.findOne({ idq: idqOrigin, password });
        if (!userOrigin) {
            return res.status(400).json({
                error: 'Usuario no válido'
            });
        }

        const userDestiny = await userModel.findOne({ idq: idqDestiny });
        
        if (!userDestiny) {
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
    
        // TODO: Hacer aquí las validaciones para insertar en BD
    
        const userBD = await userModel.create({ 
            user,
            password,
            idq: crypto.randomUUID(),
            name,
            email,
            img: 'test',
            trustedContacts: [],
            type: 'normal',
            docs: []
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

export async function newContact(req, res) {
    try {
        const { idq, password } = req.body;
        
        const userBD = await userModel.findOne({ idq, password });
        if (!userBD) {
            return res.status(400).json({
                error: 'Usuario no válido'
            });
        }

        const { name, relationship, phone } = req.body;
        const trustedContact = {
            name,
            relationship,
            phone,
        };

        userBD.trustedContacts.push(trustedContact);
        await userBD.save();

        return res.json({
            data: userBD
        });
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            error: 'Error al crear el contacto de confianza'
        });
    }
}

export async function newDoc(req, res) {
    try {
        const { idq, password } = req.body;

        const userBD = await userModel.findOne({ idq, password });
        if (!userBD) {
            return res.status(400).json({
                error: 'Usuario no válido'
            });
        }

        const { docType, doc } = req.body;
        const newDoc = {
            docType,
            doc
        };

        userBD.docs.push(newDoc);
        await userBD.save();

        return res.json({
            data: userBD
        });
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            error: 'Error al crear el documento'
        });
    }
}