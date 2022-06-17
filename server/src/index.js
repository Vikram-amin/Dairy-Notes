
const express = require('express')
const app = express()
const cors = require('cors')
const PostRoute = require('./Route/post.route')

app.use(express.json())
app.use(cors())

app.use("/post",PostRoute)


module.exports = app