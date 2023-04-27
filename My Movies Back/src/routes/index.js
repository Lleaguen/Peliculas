const { Router } = require('express');
const {  getInfoMovies, getUsers, createUser } = require("../controllers/index")
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { Users, Movies} = require('../db')
const router = Router();
const axios = require('axios');
const {Sequelize, Model} = require('sequelize');
const express = require('express');


router.post("/users", async (req, res) =>{
    const { email, password } = req.body;
     const userCheck = await Users.findOne({
         where: { email: email} 
     })
     if(userCheck){
         return res.status(400).send('The user already exist');
     } else {
         await Users.create({
            email, password
        })
        return res.status(200).send('The user has been created');
     }
} );
module.exports = router;