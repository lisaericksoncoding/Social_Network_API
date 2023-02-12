const {Schema, model } = require('mongoose');
const reactionSchema = require('./reaction');
const dateFormat = require('../utils/dateFormat');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            minlentgth: 1,
            maxlength: 200
        },
        createdAt: {
            type: Date,
            default: Date.now(),
            get: timestamp => dateFormat(timestamp)
        },
        username: {
            type: String,
            required: true
        },
        reactions: [reactionSchema]
    },
    {
        toJSON: {
            getters: true,
            virtuals: true
        },
        id: false
    }
);

thoughtSchema.virtual('reactionCount').get(function() {
    return this.friends.length
});

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;