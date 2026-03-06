const express = require("express")

const app = express()

app.get("/",(request,response)=> {
    response.send("VAAAAIIIIII CORINTHIANS, CAMPEÃO MUNDIAL ............%%%%%%%%%................. ")

} )

app.get("/users",(req,res)=>{
    res.send([
        {
            "id":1,
            "name": "jesse",
            "idade" : 26
        },
        {
            "id":2,
            "name": "joao",
            "idade" : 25
        }
    ])
} )


module.exports = app