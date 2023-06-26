const user = require('../models/User');

module.exports.registerUser = (req, res) => {
    
    console.log(req.body);
    if (req.body.password.length < 8) return res.send({message: "Password is too short."})

    let newUser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        mobileNo: req.body.mobileNo,
        password: req.body.password
        
    })
    newUser.save()
    .then(user => res.send(user))
    .catch(err => res.send(err))
}