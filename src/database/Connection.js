const mongoose = require('mongoose')

const mongooseConnection = mongoose.connect('mongodb://localhost:27017/mastermindutp',{useNewUrlParser: true, useUnifiedTopology: true}, (err)=>{
    if(!err){
        console.log('Conectado a la BD')
    } else {
         console.log(err)
    }
})

module.exports = mongooseConnection;