require('dotenv').config()

const express = require('express')

//express app bootup
const app = express()

//middleware
app.use((req, resp, next) => {
    console.log(req.path, req.method)
    next()
})

//routes
app.get('/', (req, resp) => {
    resp.json({msg: 'Welcome to the app!'})
})

//listen for requests on port 
app.listen(process.env.PORT, () => {
    console.log('listening on port', process.env.PORT)
})

