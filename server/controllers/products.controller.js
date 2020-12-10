const Product = require("../models/products.model");

class ProductController {

    getAll(req, res) {
        Product.find({})
            .then(products => res.json(products))
            .catch(err => res.json(err));
    }
    getOne(req, res) {
        Product.findById(req.params._id)
            .then(Product => res.json(Product))
            .catch(err => res.json(err));
    }
    create(req, res) {
        Product.create(req.body)
            .then(Product => res.json(Product))
            .catch(err => res.json(err));
    }
    update(req, res) {
        Product.findByIdAndUpdate({ _id: req.params._id }, req.body, { runValidators: true })
            .then(Product => res.json(Product))
            .catch(err => res.json(err));
    }
    remove(req, res) {
        Product.deleteOne({ _id: req.params._id })
            .then(() => res.json({ msg: "ok, it's deleted" }))
            .catch(err => res.json(err));
    }
    // getRandom(req, res) {
    //     Product.count().then((count) => {
    //         var random = Math.floor(Math.random() * count);
    //         Product.findOne().skip(random).then((result) => {
    //             res.json(result);
    //             console.log(result);
    //         }).catch(err => res.json(err));
    //     }).catch(err => res.json(err));
    // }
}

module.exports = new ProductController();