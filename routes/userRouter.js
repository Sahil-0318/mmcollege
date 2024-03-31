import express from 'express'
const userRouter = express.Router()
import {userAuth} from '../middlewares/userMiddleware.js'

import { 
    index,
    userPage,
    bbaAdmForm,
    bbaAdmFormPost,
    bcaAdmForm,
    bcaAdmFormPost
} from '../controllers/userController.js'

userRouter.get('/', index)

userRouter.get('/userPage',userAuth, userPage)

userRouter.get('/bbaAdmForm',userAuth, bbaAdmForm)

userRouter.post('/bbaAdmForm',userAuth, bbaAdmFormPost)

userRouter.get('/bcaAdmForm',userAuth, bcaAdmForm)

userRouter.post('/bcaAdmForm',userAuth, bcaAdmFormPost)

export default userRouter