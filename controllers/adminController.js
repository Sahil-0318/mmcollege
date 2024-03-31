import User from '../models/userModel/userSchema.js'
import BbaAdmForm from '../models/userModel/bbaAdmFormSchema.js'
import BcaAdmForm from '../models/userModel/bcaAdmFormSchema.js'

const adminPage = async (req, res) => {
    try {
        const user = await User.findOne({ _id: req.id })

        return res.render('adminPage', { user })
    } catch (error) {
        res.status(401)
    }
}

const bbaAdmList = async (req, res) => {
    try {
        const user = await User.findOne({ _id: req.id })
        const BbaAdmList = await BbaAdmForm.find({})
        // console.log(allUser);
        res.render('bbaAdmList', { list: BbaAdmList, user })
    } catch (error) {
        res.status(401)
    }
}

const bcaAdmList = async (req, res) => {
    try {
        const user = await User.findOne({ _id: req.id })
        const BcaAdmList = await BcaAdmForm.find({})
        // console.log(allUser);
        res.render('bcaAdmList', { list: BcaAdmList, user })
    } catch (error) {
        res.status(401)
    }
}

export {
    adminPage,
    bbaAdmList,
    bcaAdmList
}