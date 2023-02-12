const { Thought, User } = require('../models');

const thoughtController = {
    async getAllThoughts(req, res) {
        try {
            const thoughts = await Thought.find({}).sort({createdAt: -1});
            res.status(200).json(thoughts);
        } catch (err) {
            res.status(500).json(err)
        }

    },
    async getOneThought(req, res) {
        try {
            const thoughts = await Thought.findOne({_id: req.params.id});
            if(!user) {
                res.status(404).json("Thought does not exist!");
                return;
            }
            res.status(200).json(thoughts);
        } catch (err) {
            res.status(500).json(err)
        }

    },
    async createThought(req, res) {
        try {
            const newThought = await Thought.create(req.body);
            await User.findOneAndUpdate(
                {username: newThought, username}, 
                {$push: {thoughts: newThought._id}},
                { new: true}
                )
            res.status(200).json(newThought);
        } catch (err) {
            res.status(500).json(err)
        }

    },
    async updateThought(req, res) {
        try {
            const updatedThought = await User.findOneAndUpdate({
                _id: req.params.id},
                { $set: req.body },
                { new: true }
            );
            if (!updatedThought){
                res.status(404).json("Thought not found!")
            }
            res.status(200).json(updatedThought);
        } catch (err) {
            res.status(500).json(err)
        }

    },
    async deleteThought(req, res) {
        try {
            const deleteThought = await User.findOneAndRemove(
                {_id: req.params.id},
    
            );
            res.status(200).json(deleteThought);
        } catch (err) {
            res.status(500).json(err)
        }

    },
    async addReaction(req, res) {
        try {
            const addReaction = await User.findOneAndUpdate({
                _id: req.params.thoughtId},
                { $addToSet: {reactions: req.body}},
                { new: true }
            );
            res.status(200).json(addReaction);
        } catch (err) {
            res.status(500).json(err)
        }

    },
    async removeReaction(req, res) {
        try {
            const removeReaction = await User.findOneAndUpdate({
                _id: req.params.thoughtId},
                { $pull: {reactions: {reactionId: req.body}}},
                { new: true }
            );
            res.status(200).json(removeReaction);
        } catch (err) {
            res.status(500).json(err)
        }

    },

}
module.export = thoughtController;