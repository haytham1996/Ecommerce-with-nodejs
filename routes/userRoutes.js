import express from 'express'

const router = express.Router()

router.get('/userTest', (req, res) => {
    res.send('user Test is successsfull')
})

export default router