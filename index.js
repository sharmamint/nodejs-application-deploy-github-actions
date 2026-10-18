import express from 'express'

const app = express()
const port = process.env.port ?? 8080
app.get('/' , (req, res) => {
    return res.json({ msg : 'hello world'})
})
app.listen(port ,() => {
    console.log('server is up and running on PORT ${PORT}')
})