const Product = require('../models/productModel.js');
const uniqueId = require('uuid').v4


// Create and Save a new Product
exports.addNewProduct = async (req, res) => {
    req.body.productId = uniqueId();
    const newProduct = new Product(req.body);
    newProduct.save()
        .then(product => res.json(product))
        .catch(err => res.status(500).json({ error: err }));
}

// Get all products
exports.getAllProducts = (req, res) => {
    Product.find()
        .then(products => res.json(products))
        .catch(err => res.status(500).json({ error: err }));
};

// Get a single product by id 
exports.findOneProduct = (req, res) => {
    Product.findById(req.params.productId)
        .then(product => res.json(product))
        .catch(err => res.status(500).json({ error: err }));
};

// Update a product by id
exports.updateProducts = async (req, res) => {
    try {
        let updateResult = await Product.updateOne({ productId: req.body.productId }, { $set: req.body });
        if (updateResult) {
            logger.info("updateContractor data", updateResult);
            successJson.status = 200;
            res.send(successJson);   // send data to frontend
        }
    }
    catch (e) {
        errorJson.data = e;
        errorJson.status = 404;
        res.send(errorJson);
    }

}
