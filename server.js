const express = require("express")

const app = express()

app.get("/",(request,response)=> {
    response.send("VAAAAIIIIII CORINTHIANS, CAMPEÃO MUNDIAL ............%%%%%%%%%................. ")

} )
app.listen(3000, () =>{
    console.log(' servidor rodando em http://localhost:3000')

})

