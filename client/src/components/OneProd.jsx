import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';


const OneProd = (props) => {
  const [product, setProduct] = useState({title:"", price:"", description:""});

  useEffect(() => {
    axios.get(`http://localhost:8000/api/products/${props._id}`)
      .then(res => {
        console.log(res); 
        setProduct(res.data) 
      }).catch(err => { console.error(err) })
  },[props._id])

  const remove = _id => {
    axios.delete(`http://localhost:8000/api/products/delete/${_id}`)
        .then(res => {
            console.log(res);
            product();
            
        }).catch(err => console.error(err));
}

  return (
    <>
        <Link className="btn btn-outline-dark mt-3 col-2" to={'/'}><span>&#10232;</span> Main page</Link>
    <div className="mt-5 text-center">
        <h3>{product.title}</h3>
        <div className="m-3">
        <p className="m-0"><strong>Price: </strong>${product.price}</p>
        <p><strong>Description: </strong>{product.description}</p>
        <a className="mx-2 btn btn-outline-warning btn-sm col-1" href={`/${props._id}/edit`}>Edit</a>
        <a className="mx-2 btn btn-outline-danger btn-sm col-1" href={'/'} onClick={e => remove(product._id)}>Delete</a>        
        </div>
    </div>
    </>
  )
}

export default OneProd
