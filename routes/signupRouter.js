import express from 'express'
const signupRouter = express.Router()

import {
    signup,
    signupPost
} from '../controllers/signupController.js'

signupRouter.get('/signup', signup)

signupRouter.post('/signup', signupPost)


export default signupRouter