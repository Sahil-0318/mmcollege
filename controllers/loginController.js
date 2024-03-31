import User from '../models/userModel/userSchema.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const login = (req, res) => {
    res.render('login')
}

const loginPost = async (req, res) => {
    try {
        const { email, password } = req.body
        const result = await User.findOne({ email: email })

        if (result != null) {
            const isMatch = await bcrypt.compare(password, result.password)
            if (result.email == email && isMatch && result.isAdmin == true) {
                // console.log(result);

                const token = jwt.sign({
                    id: result._id,
                    email: result.email,
                    isAdmin: result.isAdmin
                }, process.env.SECRET_KEY,
                    { expiresIn: "1d" })
                res.cookie('uid', token, { maxAge: 24 * 60 * 60 * 1000, httpOnly: true })
                return res.redirect('adminPage')
            }
            else if (result.email == email && isMatch) {
                // console.log(result);

                const token = jwt.sign({
                    id: result._id,
                    email: result.email,
                    isAdmin: result.isAdmin
                }, process.env.SECRET_KEY,
                    { expiresIn: "1d" })
                res.cookie('uid', token, { maxAge: 24 * 60 * 60 * 1000, httpOnly: true })
                return res.redirect('userPage')
            } else {
                return res.render('login',{ "invalid": "Invalid email or password" })
                // res.send('Invalid email or password')
            }
        } else {
            return res.redirect('signup')
        }
    } catch (error) {
        console.log(error);

    }
}

const logout = async (req, res) => {
    res.clearCookie("uid");
    res.status(201).redirect('/')
}

export {
    login,
    loginPost,
    logout
}