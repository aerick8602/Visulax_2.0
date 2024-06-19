const Users = require('../model');
const bcrypt = require('bcrypt');

async function signIn(req, res) {
    const { email, password } = req.body;

    try {
        const user = await Users.findOne({ email });
        if (!user) {
            return res.status(404).json({ msg: "User not found. Please check the provided credentials and try again." });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ msg: "Wrong password. Please check your password and try again." });
        }

        res.json({ msg: "Signing in successfully" });
    } catch (err) {
        res.status(500).json({ msg: "Internal server error" });
    }
}

module.exports = signIn;
