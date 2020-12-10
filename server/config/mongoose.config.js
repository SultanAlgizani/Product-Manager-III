const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/products_db", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
}).then( () => console.log("Succesfully connected to products_db")
).catch(err => console.err(err));