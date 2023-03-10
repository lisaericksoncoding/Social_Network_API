const router = require('express').Router();

const {
    getAllUsers,
    getSingleUser,
    createUser,
    updateUser, 
    deleteUser,
    addFriend,
    removeFriend
} = require('../../controllers/user-controller');
// console.log(getAllUsers)
router.route("/").get(getAllUsers).post(createUser);


router.route('/:id').get(getSingleUser).put(updateUser).delete(deleteUser);

router.route("/:userId/friends/:friendId").put(addFriend).delete(removeFriend);


module.exports = router;