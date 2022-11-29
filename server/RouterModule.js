const express = require('express')
const router = express.Router()

// middleware that is specific to this router
router.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next()
})
// define the home page route
router.get('/', (req, res) => {
    res.send('yay!')
})
// define about route
router.get('/yay', (req, res) => {
    res.send('yay yay')
})

module.exports = router