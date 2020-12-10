import React, { useState, useEffect } from 'react';
import { Link } from '@reach/router';
import axios from 'axios';

const Show = () => {
    const [allProducts, setAllProducts] = useState([]);

    useEffect(() => {
        getAllProducts();
    }, []);

    function getAllProducts() {
        axios.get("http://localhost:8000/api/products")
            .then(res => { setAllProducts(res.data) })
            .catch(err => { console.error(err) });
    }
    const remove = _id => {
        axios.delete(`http://localhost:8000/api/products/delete/${_id}`)
            .then(res => {
                console.log(res);
                getAllProducts();
            }).catch(err => console.error(err));
    }

    // const remove
    return (
        <div className="my-5 text-center"> <hr />
            <h1>All Products</h1>
            { allProducts.slice(0).reverse().map((product, i) => {
                return (
                    <div className="my-4 row justify-content-center" key={i} >
                        <h6 className="col-2 text-left text-capitalize align-self-center"> <Link to={`/${product._id}`}>{product.title}</Link> </h6>
                        <button className="mx-2 btn btn-outline-danger btn-sm" onClick={e => remove(product._id)}>Delete</button>
                        {/* <button className="mx-2 btn btn-outline-warning" type="submit">Edit</button> */}
                    </div>
                )
            })}
        </div>
    )
}

export default Show
