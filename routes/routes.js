module.exports = (app) => {
    const productsController = require('../controllers/productsController.js');
    const customerDetailsController = require('../controllers/customerDetailsController.js')
    const cors = require('cors');

    //=========CORS enabling========================//

    app.use(function (req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        res.setHeader('Access-Control-Allow-Headers', '*');
        res.setHeader('Access-Control-Allow-Credentials', true);
        res.setHeader('access-control-expose-headers', 'access-token');
        next();
    });

    app.post('/api/registerNewCustomer', customerDetailsController.registerNewCustomer);
    app.post('/api/loginCustomer', customerDetailsController.loginCustomer);
    app.post('/api/addNewProduct', productsController.addNewProduct);
    app.post('/api/updateProducts', productsController.updateProducts);
    app.get('/api/:productId', productsController.findOneProduct);
    app.get('/api/getAllProducts', productsController.getAllProducts);

}