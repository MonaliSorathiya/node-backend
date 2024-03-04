const Customer = require('../models/customerDetailsModel.js');


// Handling user signup
exports.registerNewCustomer = async (req, res) => {
    console.log('req:registerNewCustomer ', req.body);
    Customer
        .find({ email: req.body.email })
        .exec()
        .then((user) => {
            if (user.length >= 1) {
                return res.send({ message: "Email already exists." });
            } else {
                var newCustomer = new Customer({
                    username: req.body.username,
                    mobileno: req.body.mobileno,
                    email: req.body.email,
                    password: req.body.password,
                });
                newCustomer
                    .save()
                    .then((result) => {
                        console.log(result);
                        res.status(201).json({
                            message: "User Registered Success",
                        });
                    })
                    .catch((err) => {
                        console.log("registerNewCustomer",err);
                        res.status(500).json({
                            error: err,
                        });
                    });
            }
        });
};

//Handling user login
exports.loginCustomer = async (req, res) => {
    console.log('req:loginCustomer ', req.body);
    try {
        // check if the user exists
        const user = await Customer.findOne({ username: req.body.username });
        if (user) {
            //check if password matches
            const result = req.body.password === user.password;
            if (result) {
                return res.send({ message: "Login Success" });
            } else {
                return res.send({ error: "password doesn't match" });
            }
        } else {
            return res.send({ error: "User doesn't exist" });
        }
    } catch (error) {
        res.status(400).json({ error });
    }
};