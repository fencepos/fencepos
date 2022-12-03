const express = require('express'),
    app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/greet/:name', (req, res) => {// greet/Alex
    return res.send(
        `How are you ${req.params.name} !`,
    ); // How are you Alex
});

app.get('/users/:userId/books/:bookId', (req, res) => {
    res.send(req.params)
})

const birds = require('./RouterModule')

app.use('/yay', birds) // localhost:3000/yay

const testRoutes = require('./routes/auth');

app.use('/auth', testRoutes);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})