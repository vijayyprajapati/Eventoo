require('dotenv').config()

const express = require('express')

const mongoose = require('mongoose')

const eventRoutes = require('./routes/events')
const userRoutes = require('./routes/user')
const registrationRoutes = require('./routes/registrations')
const user_Routes = require('./routes/user_')
const { application } = require('express')

const app = express()

app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path,req.method,req.params,req)
    next()
})

app.use('/api/user_',user_Routes)
app.use('/api/events',eventRoutes)

app.use('/api/user',userRoutes)

app.use('./api/registrations',registrationRoutes)

mongoose.connect(process.env.MONGO_UI).then(()=>{
    app.listen(process.env.PORT, () => {
        console.log('connected to db and listening on port ',process.env.PORT)
    })
})
.catch((error) => {
    console.log(error)
})


