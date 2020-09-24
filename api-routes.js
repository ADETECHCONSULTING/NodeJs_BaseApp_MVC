//init express router
let router = require('express').Router();

//Import useful controllers
let exampleController = require('./controller/exampleController');

//Set default api response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its working',
        message: 'Welcome to base api crafted with love!'
    });
});

//Example routes
router.route('/example')
    .get(exampleController.index)
    .post(exampleController.new);

router.route('/example/:example_id')
    .get(exampleController.view)
    .patch(exampleController.update)
    .put(exampleController.update)
    .delete(exampleController.delete);


//export API routes
module.exports = router;
