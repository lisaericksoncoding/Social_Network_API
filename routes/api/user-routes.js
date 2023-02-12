const router = require('express').Router();

const {
    getAllUsers,
    getSingleUser,
    createUser,
    updateUser, 
    deleteUser,
} = required("../../controllers/user-controller");

router.route("/").get(getAllUsers).post(createUser);

router.route('/:id').get(getSingleUser).put(updateUser).delete(deleteUser);

router.route("/:userId/friends/:friendId").post(updateUser).delete(deleteFriend);


module.export = router