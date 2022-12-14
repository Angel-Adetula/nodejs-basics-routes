const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    console.log('GET /');
    res.render('index', { text: 'world!!!'});
});

const userRouter = require('./routes/users');
app.use('/students', userRouter);



app.listen(3001);