const router = require('express').Router();
const userRoutes = require('./userRoutes');
const thoughtRoutes = require('./thoughtRoutes');
const reactionRoutes = require('./Reaction');

// Middleware for handling routes related to users
router.use('/users', userRoutes);

// Middleware for handling routes related to thoughts
router.use('/thoughts', thoughtRoutes);

// Middleware for handling routes related to reactions
router.use('/reactions', reactionRoutes);

module.exports = router;
