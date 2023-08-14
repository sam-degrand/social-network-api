const router = require('express').Router();

const {
    addReaction,
    deleteReaction,
  } = require("../../controller/thoughtController");

  // router.route("/:thoughtId/reactions").post(addReaction);
router.route("/:thoughtId/reactions/:reactionId").delete(deleteReaction);
router.route("/:thoughtId/reactions").post(addReaction);

module.exports = router;