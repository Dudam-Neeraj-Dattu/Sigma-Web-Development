const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose')
const Employee = require('./models/employee')

conn = mongoose.connect('mongodb://localhost:27017/company')

const getRandom = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)]
}

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/generate', async (req, res) => {
    await Employee.deleteMany({});
    const names = ['John', 'Jane', 'Bob', 'Alice', 'Tom', 'Jerry'];
    const language = ['JavaScript', 'Python', 'Java', 'C#', 'Ruby'];
    const cities = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'];
    for (let i = 0; i < 10; i++) {
        let e = await Employee.create({
            name: getRandom(names),
            salary: Math.floor(Math.random() * 100000),        
            language: getRandom(language),
            city: getRandom(cities),
            isManager: Math.random() < 0.5
        });
    }
    res.json({ message: 'Data generated successfully' });
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})