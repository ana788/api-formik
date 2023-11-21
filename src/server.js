import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

import {PORT} from './config.js'
import logger from './middlewares/logger.js'

import userRoute from './router/userRoute.js'

const api = express() //poderiamos usar o app também como nome da variável


api.use(logger) //esta rodando antes de entrar em qualquer rota
api.use(cors())
api.use(bodyParser.json()) //middleware para converter a entrada de dados em json

api.get('/', (req, res) => {
    res.json({message: "Bem vindo à API para o projeto com Formik"})
})

api.use('/paciente', userRoute)

api.all('*', logger, (req, res) => {
    //Quando ele não encontrar a rota procurada pelo usuário
    res.status(404).json({message: "Rota não encontrada"})
})


api.listen(PORT, () => {
    console.log(`Servidor rodando na porta http://localhost:${PORT}`)
})