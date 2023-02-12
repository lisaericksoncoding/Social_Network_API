const router = require('express').Router();


const {
    getAllThoughts,
    getOneThought,
    createThought,
    updateThougght, 
    deleteThought,
    addReaction,
    deleteReaction,
} = required("../../controller/thought-controller");

router.route("/").get(getAllThoughts).post(createThought);
