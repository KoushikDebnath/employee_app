const jsonwebtoken = require('jsonwebtoken');
const Admin = require('./models/admindb');
const auth = (req, res, next) => {

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer ')) {
        const token = req.headers.authorization.split(' ')[1];
        const userName = jsonwebtoken.verify(token, 'secrete');
        Admin.findOne({ username: userName })
            .then(admin => {
                if (admin) {
                    return next();
                }
                else {
                    console.log('User Name not found');
                    return res.status(403).json({ error: 'unauthorized' });
                }
            })
            .catch(err => {
                console.error(err);
                return res.status(500).json({ error: 'Somenthing went wrong' });
            })


    }
    else {
        console.log('no token found');
        return res.status(403).json({ error: 'unauthorized' })
    }


}



module.exports = auth;