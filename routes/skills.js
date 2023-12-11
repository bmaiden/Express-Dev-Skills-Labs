var express = require('express');
var router = express.Router();

// require the controller that exports Skill CRUD functions
var skillsCtrl = require('../controllers/skills');

/* GET users listing. */
// router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
// });
// all actual paths start with "/skills" so commented out the above router.get

// GET /skills
router.get('/', skillsCtrl.index);
// GET /skills/new
router.get('/new', skillsCtrl.new)
// GET /skills/:id
router.get('/:id', skillsCtrl.show)
// POST /skills
router.post('/', skillsCtrl.create);
// DELETE /skills/:id
router.delete('/:id', skillsCtrl.delete);


module.exports = router;