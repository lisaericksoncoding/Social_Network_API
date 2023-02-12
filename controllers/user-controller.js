const { User, Thought } = require('../models');

const userController = {
    async getAllUsers() {
        try {
            const users = await User.find({}).select('-_v').populate('thoughts').populate('friends');
            res.status(200).json(users);
        } catch (err) {
            res.status(500).json(err)
        }

    },
    async getSingleUser() {
        try {
            const users = await User.findOne({_id: req.params.id}).select('-_v').populate('thoughts').populate('friends');
            if(!user) {
                res.status(404).json("User does not exist!");
                return;
            }
            res.status(200).json(users);
        } catch (err) {
            res.status(500).json(err)
        }

    },
    async createUser(req, res) {
        try {
            const newUser = await User.create(req.body);
            res.status(200).json(newUser);
        } catch (err) {
            res.status(500).json(err)
        }

    },
    async updateUser(req, res) {
        try {
            const updateUser = await User.findOneAndUpdate({
                _id: req.params.id},
                { $set: req.body },
                { new: true }
            );
            if(!user) {
                res.status(404).json("Cannot find user!");
                return;}
            res.status(200).json(updateUser);
        } catch (err) {
            res.status(500).json(err)
        }

    },
    async deleteUser(req, res) {
        try {
            const updateUser = await User.findOneAndRemove(
                {_id: req.params.id},
    
            );
            res.status(200).json(deleteUser);
        } catch (err) {
            res.status(500).json(err)
        }

    },
    async addFriend(req, res) {
        try {
            const newFriend = await User.findOneAndUpdate(
                {_id: req.params.userId},
                {$push: {friends: req.params.friendId}},
                {new: true}
            );
            await User.findOneAndUpdate(
                {_id: req.params.friendId},
                {$push: {friends: req.params.userId}},
                {new: true})
            res.status(200).json(updateUser);
        } catch (err) {
            res.status(500).json(err)
        }

    },
    async removeFriend(req, res) {
        try {
            const deleteFriend = await User.findOneAndRemove(
                {_id: req.params.userId},
                {$pull: {friends: req.params.friendId}},
                {new: true}
            );
            await User.findOneAndUpdate(
                {_id: req.params.friendId},
                {$pull: {friends: req.params.userId}},
                {new: true})
                
            res.status(200).json(updateUser);
        } catch (err) {
            res.status(500).json(err)
        }

    },
}
module.export = userController;