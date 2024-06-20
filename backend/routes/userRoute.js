const express = require("express");
const User = require("User");

const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json({
            count: users.length,
            data: users
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({
            message: error.message
        })
    }
});

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        res.status(200).send(user);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({
            message: error.message
        })
    }
});

router.post('/', async (req, res) => {
    try {
        if (!req.body.username || !req.body.email || !req.body.password) {
            res.status(400).send({
                message: 'Either of username, email or password cannot be empty'
            });
        }
        const user = {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            firstName: req.body.firstName,
            lastName: req.body.lastName
        };
        const newUser = await User.create(user);
        res.status(201).send(newUser);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({
            message: error.message
        })
    }
});

router.put('/:id', async (req, res) => {
    try {
        if (!req.body.username || !req.body.email || !req.body.password) {
            res.status(400).send({
                message: 'Either of username, email or password cannot be empty'
            });
        }
        const { id } = req.params;
        const user = {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            firstName: req.body.firstName,
            lastName: req.body.lastName
        };
        const result = await User.findByIdAndUpdate(id, req.body);
        if (!result) {
            res.status(404).send({
                message: 'User with this id does not exist'
            })
        }
        res.status(200).send({
            message: 'User has been updated successfully'
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({
            message: error.message
        })
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await User.findByIdAndDelete(id);
        if (!result) {
            res.status(404).send({
                message: 'User with this id does not exist'
            })
        }
        res.status(204).send({
            message: 'User has been deleted successfully'
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({
            message: error.message
        })
    }
});