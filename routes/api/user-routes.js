const router = require('express').Router();

const {
    getAllUsers,
    getSingleUser,
    createUser,
    updateUser, 
    deleteUser,
    addFriend,
    deleteFriend,
} = required("../../controllers/user-controller");

router.route("/").get(getAllUsers).post(createUser);

router.route('/:id').get(getSingleUser).put(updateUser).delete(deleteUser);

router.route("/:userId/friends/:friendId").put(addFriend).delete(deleteFriend);


module.export = router;