import express from 'express'
import multer from 'multer'

const Router = express.Router()

const storage = multer.diskStorage({
    destination: async (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, callback) => {
        const ext = file.originalname.split('.')
        callback(null, Date.now() + '.' + ext[1])
    }
})

const upload = multer({
    storage: storage,
    fileFilter: (req, file, callback) => {
        if (
            file.mimetype === 'image/jpeg' ||
            file.mimetype === 'image/png' ||
            file.mimetype === 'image/gif'
        ) {
            callback(null, true)
        } else {
            callback(null, false)
        }
    }
})

Router.post('/upload', upload.single('photo'),  async (req, res) => {
    console.log(req.file)
})

export default Router