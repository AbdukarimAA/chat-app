const router = require('express').Router()
const messageModel = require("../models/Messages");

router.get('/all', async (req, res) => {
    try {
        const all = await messageModel.find()
        res.status(200).json(all)
    } catch (e) {
        res.status(400).json({message: 'GG WP', e})
    }
})

router.post('/write', async (req, res) => {
    const {message} = req.body
    try {
        const msg = await messageModel.create({message})
        res.status(201).json(msg)
    } catch (e) {
        res.status(400).json({message: 'GG WP', e})
    }
})

router.post('/addimage', async (req, res) => {
    const {image, message} = req.body
    try {
        const msg = await messageModel.create({image, message})
        res.status(201).json(msg)
    } catch (e) {
        res.status(400).json({message: 'GG WP', e})
    }
})

module.exports = router