    const users= require("../data/users")
    
    const findAll=() =>{
        return users
    }
    const create = (newUsers) =>{

        users.push(newUsers)
        return newUsers

    }

    

    const findById=(id) =>{


    //  for ( let i = 0; i <  users.length; i++){

    //         if ( users[i].id ==id ){
    //            return users[i]
    //         } 
    //     }
    //     return null

     return users.find(user => user.id ==id)
    }


    const update=(id, newUser) =>{

        const user=users.find(user => user.id ==id)

        if(!user){
            return undefined
        }

        // user={
        //     id: user.id,
        //     nome:newUser.nome,
        //     Idade:newUser.Idade
          

        // }

        if(newUser.name){
            user.name=newUser.name

        }

        if(newUser.idade){
            user.idade=newUser.idade

        }

        // user.name= newUser.name
        // user.idade=newUser.idade

        return user
    }

    const remove = (id) =>{
         const index =users.findIndex(user => user.id ===id)
        
        const user = users[index]
         
          if(!user){
            return undefined
        }

         users.splice(index, 1)

         return user 



    }





    module.exports={
        findAll,
        create,
        findById,
        update,
        remove
       
    }