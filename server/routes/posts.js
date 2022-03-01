import express from 'express'

const router = express.Router()

router.get('/hey', (req, res) => {
    return res.send("Welcome")
})


export default router