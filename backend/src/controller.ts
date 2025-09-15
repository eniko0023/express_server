import express from "express";
import { createUser, getUsers } from "./model.js";

export const getAll = async (req: express.Request, res: express.Response) =>{
    try{
        const data = await getUsers;
        res.status(200).type("application/json").send(data);
    }catch(error){
        res.status(500).type("application/json").send({error: "Users request error"});
    }
}

export const addUser = async (req: express.Request, res: express.Response) =>{
    const newUser = req.body;
    // kuldes az adatbazisnak
    try{
        const user = await createUser(newUser);
        res.status(201).type("applicastion/json").send(user);
    }catch(error){
        res.status(500).type("applicastion/json").send("Nem sikerült létrehozni az új felhasználót");
    }
    
}

export const deleteUser = async (req: express.Request, res: express.Response) =>{
    const id = parseInt(req.params.id!);
    if (id === 3){
        res.status(200).type("application/json").send({message: "Successful!"});
    }
}