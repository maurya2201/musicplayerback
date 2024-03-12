const express =  require('express');
const { postController, getController, getOneController } = require('../controller/controller');
const router = express.Router();

router.route('/')
.post(postController)
.get(getController);
router.route('/:id').get(getOneController);
module.exports=router