const User = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const signUp = async (req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
        return res.status(400).json({ message: "Enail and password is required" })
    }
    let user = await User.findOne({ email })
    if (user) {
        return res.status(400).json({ error: "User Alrady Exist" })
    }
    const hashpwd = await bcrypt.hash(password, 10)
    const newUser = await User.create({
        email, password: hashpwd
    })
    let token = jwt.sign({ id: newUser._id, role: newUser.role }, process.env.SECRET_KEY)
    return res.status(200).json({ token, user:newUser })

}
const login = async (req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
        return res.status(400).json({ message: "Email and password is required" })
    }
    let user = await User.findOne({ email })
    if (user && await bcrypt.compare(password, user.password)) {
        let token = jwt.sign({ id: user._id, role: user.role }, process.env.SECRET_KEY)
        return res.status(200).json({ token, user })
    }else{
                return res.status(400).json({message:"Invalid credentials"})
    }

}
const allUser = async(req, res) => {
    // const user = await User.findById(res.params.id)
    // return res.

}

module.exports = { signUp, login, allUser }