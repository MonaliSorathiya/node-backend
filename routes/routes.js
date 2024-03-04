const express = require("express");
const router = express.Router();
const productsController = require('../controllers/productsController.js');
const customerDetailsController = require('../controllers/customerDetailsController.js')

router.route("/userDetails/registerNewCustomer").post(customerDetailsController.registerNewCustomer);
router.route("/userDetails/loginCustomer").post(customerDetailsController.loginCustomer);
router.route("/products/addNewProduct").post(productsController.addNewProduct);
router.route("/products/getAllProducts").get(productsController.getAllProducts);
router.route("/products/:productId").get(productsController.findOneProduct);
router.route("/products/updateProducts").post(productsController.updateProducts);


module.exports = router;