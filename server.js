import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import http from 'http'
import Config from './config/config.js'
import apiRouter from './routes/router.js'


const {DB, ENV} = Config

// Connexion à la base de données 
mongoose.connect(DB.CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true })


// Initialisation du serveur http
const app = express()
const server = http.createServer(app);

// Parseur du body pour les requêtes
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Utilise v1 comme prefix pour l'API
app.use('/v1', apiRouter);

server.listen(process.env.PORT, () => {
    const { address } = server.address()
    console.log(`Listening at http://${address}:${process.env.PORT}`)
  })