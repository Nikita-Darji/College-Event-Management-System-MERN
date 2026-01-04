const mongoose = require('mongoose')
const connectdb = async(req,res)=>{
    await mongoose.connect(process.env.CONNECTION_STRING)
    .then(()=>console.log("Mongoose Connected ")
    )
}
module.exports=connectdb