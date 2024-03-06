const express = require("express");
const router = express.Router();
const productsController = require('../controllers/productsController.js');
const customerDetailsController = require('../controllers/customerDetailsController.js')

console.log('!!!!! Welcome Routes !!!!!')

router.route("/registerNewCustomer").post(customerDetailsController.registerNewCustomer);
router.route("/loginCustomer").post(customerDetailsController.loginCustomer);
router.route("/addNewProduct").post(productsController.addNewProduct);
router.route("/getAllProducts").get(productsController.getAllProducts);
router.route("/:productId").get(productsController.findOneProduct);
router.route("/updateProducts").post(productsController.updateProducts);


module.exports = router;