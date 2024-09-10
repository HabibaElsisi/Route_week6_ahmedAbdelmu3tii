import express from 'express'
import dotenv from "dotenv"
import { dbConnection } from './database/databaseConnection.js'
import userRouter from './src/modules/user/user.routes.js'
import noteRouter from './src/modules/notes/notes.routes.js'
const app = express()
const port = 3000
dbConnection()
dotenv.config()
app.use(express.json())
app.use("/users",userRouter)
app.use("/notes",noteRouter)
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))