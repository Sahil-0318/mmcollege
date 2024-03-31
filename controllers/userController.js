import User from '../models/userModel/userSchema.js'
import BbaAdmForm from '../models/userModel/bbaAdmFormSchema.js'
import BcaAdmForm from '../models/userModel/bcaAdmFormSchema.js'

const index = async (req, res) => {
    return res.render('index')
}

const userPage = async (req, res) => {
    try {
        const user = await User.findOne({ _id: req.id })

        return res.render('userPage', { user })
    } catch (error) {
        res.status(401)
    }
}

const bbaAdmForm = async (req, res) => {
    try {
        const user = await User.findOne({ _id: req.id })

        return res.render('bbaAdmForm', { user })
    } catch (error) {
        res.status(401)
    }
}

const bbaAdmFormPost = async (req, res) => {
    try {
        const {fullName,registrationNumber, currentYear, aadharNumber, dOB, gender, nationality, religion, caste, fatherName, motherName, parmanentAddress, parmanentAddressPin,presentAddress, presentAddressPin, mobileNumber, email} = req.body
        const user = await User.findOne({ _id: req.id })

        const appliedUser = await BbaAdmForm.findOne({ appliedBy: user._id.toString() })
        // console.log(appliedUser);

        if (appliedUser == null || appliedUser.appliedBy != user._id.toString()) {
            const admForm = new BbaAdmForm({
                fullName,
                registrationNumber,
                currentYear,
                aadharNumber,
                dOB,
                gender,
                nationality,
                religion,
                caste,
                fatherName,
                motherName,
                parmanentAddress,
                parmanentAddressPin,
                presentAddress,
                presentAddressPin,
                mobileNumber,
                email,
                appliedBy: user._id
            })

            const admFormSubmitted = await admForm.save();
            res.status(201).render('bbaAdmForm', { "submitted": "Form Submitted", user })
        }
        else {
            res.status(201).render('bbaAdmForm', { "alreadysubmitted": "You have already submitted the form.", user })
        }

    } catch (error) {
        console.log(error);
        res.status(400).render('error');
    }
}

const bcaAdmForm = async (req, res) => {
    try {
        const user = await User.findOne({ _id: req.id })

        return res.render('bcaAdmForm', { user })
    } catch (error) {
        res.status(401)
    }
}

const bcaAdmFormPost = async (req, res) => {
    try {
        const {fullName,registrationNumber, currentYear, aadharNumber, dOB, gender, nationality, religion, caste, fatherName, motherName, parmanentAddress, parmanentAddressPin,presentAddress, presentAddressPin, mobileNumber, email} = req.body
        const user = await User.findOne({ _id: req.id })

        const appliedUser = await BcaAdmForm.findOne({ appliedBy: user._id.toString() })
        // console.log(appliedUser);

        if (appliedUser == null || appliedUser.appliedBy != user._id.toString()) {
            const admForm = new BcaAdmForm({
                fullName,
                registrationNumber,
                currentYear,
                aadharNumber,
                dOB,
                gender,
                nationality,
                religion,
                caste,
                fatherName,
                motherName,
                parmanentAddress,
                parmanentAddressPin,
                presentAddress,
                presentAddressPin,
                mobileNumber,
                email,
                appliedBy: user._id
            })

            const admFormSubmitted = await admForm.save();
            res.status(201).render('bcaAdmForm', { "submitted": "Form Submitted", user })
        }
        else {
            res.status(201).render('bcaAdmForm', { "alreadysubmitted": "You have already submitted the form.", user })
        }

    } catch (error) {
        console.log(error);
        res.status(400).render('error');
    }
}

export {
    index,
    userPage,
    bbaAdmForm,
    bbaAdmFormPost,
    bcaAdmForm,
    bcaAdmFormPost
}