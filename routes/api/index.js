const router = require('express').Router();

router.get('/ping', (req, res) => {
  res.send({ message: 'pong' });
});

router.use('/users', require('./user.routes'));
router.use('/lists', require('./list.routes'));
router.use('/todos', require('./todo.routes'));

module.exports = router;
