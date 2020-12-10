const products = require("../controllers/products.controller");

module.exports = app => {
    app.get("/api/products", products.getAll);
    // app.get("/api/products/random", products.getRandom);
    app.get("/api/products/:_id", products.getOne);
    app.post("/api/products/new", products.create);
    app.put("/api/products/update/:_id", products.update);
    app.delete("/api/products/delete/:_id", products.remove);
}