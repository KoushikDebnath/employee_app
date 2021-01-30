const Admin = require('../models/admindb');
const bcrypt = require('bcrypt');
const jsonWebToken = require('jsonwebtoken');




//login
const login = (req, res) => {

    if (req.body.userName === '') {
        return res.status(400).json({ error: 'Empty user name' });
    }

    if (req.body.password === '') {
        return res.status(400).json({ error: 'Empty password' });
    }

    Admin.findOne({ username: userName })
        .then(admin => {

            if (!admin)
                return Promise.reject('Incorrect UserName or Password');
            else
                return bcrypt.compare(req.body.password, user.password);
        })

        .then(result => {
            if (!result)
                return Promise.reject('Incorrect UserName or Password');
            else {
                const token = jsonWebToken.sign({ userName: req.body.userName }, 'secrete');
                return res.status(200).json({ token });
            }
        })
        .catch(err => {
            if (err === 'Incorrect UserName or Password') {
                return res.status(500).json({ error: 'Incorrect User Name or Password' });
            }
            console.error(err);
            return res.status(500).json({ error: 'Something went wrong!!' });
        })
};

//Register 

const register = (req, res) => {
    if (req.body.userName === '') {
        return res.status(400).json({ error: 'Empty user name' });
    }

    if (req.body.password === '') {
        return res.status(400).json({ error: 'Empty password' });
    }

    Admin.findOne({ username: userName })
        .then(user => {

            if (user)
                return res.status(404).json({ error: 'Username already exist' });
            else {
                return bcrypt.hash(req.body.password, 10)

            }

        })
        .then(password => {
            const newAdmin = new Admin({
                username: req.body.userName,
                password: password
            })

            return newAdmin.save();
        })
        .then(() => {
            const token = jsonWebToken.sign({ userName: req.body.userName }, 'secrete');
            return res.status(200).json({ token });
        })
        .catch(err => {
            console.error(err);
            return res.status(500).json({
                error: 'Something went wrong'
            });
        })
};

module.exports = {
    login,
    register
};