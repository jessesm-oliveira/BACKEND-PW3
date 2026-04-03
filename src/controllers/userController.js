 const userModel= require("../module/userModel")

 const getAllUsers=(req, res)=> {

    const users= userModel.findAll()
    return res.send(users)
       
 }
const createUser=  (req, res) =>{

const nome= req.body.nome
const idade= req.body.idade

const newUsers= {

    id : Date.now(),
    nome : nome,
    idade: idade
}


 const createdUser =userModel.create(newUsers)


 res.status(201).json(createdUser)

}


const getUserById= (req, res)=>{

    console.log()
   
    const id =req.params.id

    const user = userModel.findById(id)


    if( !user ){
        res.status(404).json({
            message:" USUÁRIO NÃO ENCONTRADO. PARA DE SER BURRO E DIGITE  CERTO OS ID"
        })
    }

    return res.json(user)
}

const updateUser=(req,res) =>{

    const {id} = req.params

   const{

    name,
    idade

   } = req.body

   const userToUpdate= {
   
    name:name,
    idade:idade

   }
     
  const updateUser = userModel.update(id,userToUpdate)

   if( !updateUser){
        res.status(404).json({
            message:" USUÁRIO NÃO ENCONTRADO. PARA DE SER BURRO E DIGITE  CERTO OS ID"
        })
    }


  return res.json(updateUser)

}




const deleteUser= (req, res) =>{

    const id = Number (req.params.id)

   const user = userModel.remove(id)

   if( !user){
        res.status(404).json({
            message:" USUÁRIO NÃO ENCONTRADO. PARA DE SER BURRO E DIGITE  CERTO OS ID"
        })
    }



 
 
   return res.json(user)

}




 module.exports = {
    getAllUsers,
    createUser,
    getUserById,
    updateUser,
    deleteUser
}
 
