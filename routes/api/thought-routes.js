const router = require('express').Router();

const {
    getAllThoughts,
    getOneThought,
    createThought,
    updateThought, 
    deleteThought,
    addReaction,
    deleteReaction,
} = required("../../controller/thought-controller");

router.route("/").get(getAllThoughts).post(createThought);

router.route('/:id').get(getOneThought).put(updateThought).delete(deleteThought);

router.route('/:thoughtId/reactions').post(addReaction);

router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);


module.export = router;
