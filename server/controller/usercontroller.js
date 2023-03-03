const User = require('../model/userSchema')

const userSignup = async (req,res) => {
    try {
        const existUser = await User.findOne({ username: req.body.username })
        if (existUser) {
            return res.status(401).json({ message: "user already exists"})
        } 

        const user = req.body;
        const newUser = new User(user);
        await newUser.save();
        res.status(200).json({ message: user });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const userLogin = async (req, res) => {
    try {
        const username = req.body.username
        const password = req.body.password

        let user = await User.findOne({username: username, password: password})
        if(user) {
            return res.status(200).json({ data: user})
        } else {
            return res.status(401).json('Invalid Credentials')
        }
    } catch (error) {
        res.status(500).json(`Error`, error.message)
    }
}

module.exports = { userSignup, userLogin }