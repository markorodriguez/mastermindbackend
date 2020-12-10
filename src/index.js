const express = require('express')
const cors = require('cors') //permite la comunicación
const mongoose = require('mongoose') //para gestionar los querys
const bodyParser = require('body-parser')

//modules
const monConnection = require('./database/Connection')

//schemas
const userSchema = require('./database/Schemas')
const mongooseConnection = require('./database/Connection')
const { response } = require('express')

const app = express();
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json()) 
app.use(express.json())

app.listen(4000, ()=>{console.log('server running')})

app.get("/", (req,res)=>{
    res.write('Mastermind Web')
})

const UserModel = mongoose.model('User', userSchema)

app.post("/scores", (req,res)=>{
    const tmpUser = req.body.user;
    const tmpScore = req.body.score;

    const newUser = UserModel({
        username: tmpUser,
        score: tmpScore
    })

    newUser.save()
    .then(()=>{
        console.log('Registro guardado')
    })
    .catch((err)=>{
        console.log('Ha ocurrido un error')
    })
})

app.get("/scores", (req,res)=>{
UserModel.find().sort({score: "asc"}).limit(5).then((response)=>{res.send(response)}).catch((err)=>{console.log(err)})
})

