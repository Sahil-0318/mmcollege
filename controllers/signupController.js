import User from '../models/userModel/userSchema.js'
import bcrypt from 'bcrypt'


const signup = (req, res)=>{
    res.render('signup')
}

const signupPost = async (req, res) => {
    try {
        const hashpassword = await bcrypt.hash(req.body.password, 10)
        const registerUser = new User({
            fullName: req.body.fullName,
            email: req.body.email,
            password: hashpassword
        })

        const registered = await registerUser.save();

        res.status(201).redirect('login')

    } catch (err) {
        console.log(err);
        res.status(400).render('error');
    }
}

export {
    signup,
    signupPost
}