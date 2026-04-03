const express = require('express')

const app = express()

const userRouter = require("./routes/userRoute")



app.get("/", (request, response)=> {
    response.send("Provérbios 16:3 - Consagre ao Senhor tudo o que você faz e os seus planos serão bem sucedidos-")
})

app.use(express.json())
app.use("/", userRouter)

module.exports = app
