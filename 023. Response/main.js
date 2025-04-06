const express = require('express')
const blog = require('./routes/blog')
const shop = require('./routes/shop')
const app = express()
const port = 3000

app.use(express.static('public')) // Serve static files from the 'public' directory
app.use('/blog', blog)
app.use('/shop', shop)
app.get('/', (req, res) => {
    console.log('GET request received');
    res.send('Hello World!')
})

app.post('/', (req, res) => {
    console.log('POST request received');
    res.send('Hello World! POST request received')
})

app.get("/index", (req, res) => {
    console.log("Hey its index")
    res.sendFile('templates/index.html', { root: __dirname })
})

app.get("/api", (req, res) => {
    console.log("Hey its api")
    res.json({ a: 1, b: 2, c: 3, d: 4, name: ["harry", "jerry"] })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})