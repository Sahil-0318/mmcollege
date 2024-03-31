import express from 'express'
const adminRouter = express.Router()
import {adminAuth} from '../middlewares/adminMiddleware.js'

import { 
    adminPage,
    bbaAdmList,
    bcaAdmList
} from '../controllers/adminController.js'

adminRouter.get('/adminPage',adminAuth, adminPage)

adminRouter.get('/bbaAdmList',adminAuth, bbaAdmList)

adminRouter.get('/bcaAdmList',adminAuth, bcaAdmList)

export default adminRouter