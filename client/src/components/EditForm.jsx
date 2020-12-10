import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { navigate, Link } from '@reach/router';

const EditForm = (props) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    console.log(props._id);
    axios.get(`http://localhost:8000/api/products/${props._id}`)
      .then(res => {
        console.log(res);
        setTitle(res.data.title);
        setPrice(res.data.price);
        setDescription(res.data.description);
      }).catch(err => console.error(err));
  }, [props._id]);

  const edit = e => {
    e.preventDefault();
    const prod = { title, price, description };
    axios.put(`http://localhost:8000/api/products/update/${props._id}`, prod)
      .then(res => {
        console.log(res.data);
        if (res.data.errors) {
          setErrors(res.data.errors);
        } else {
          navigate(`/${props._id}`);
        }
      }).catch(err => {
        console.error(err);
      });
  }
  return (
    <div>
      <Link className="btn btn-outline-dark mt-3 col-2" to={'/'}>Main page</Link><br />
      <Link className="btn btn-outline-dark mt-3 col-1" to={`/${props._id}`}><span>&#10232;</span> Back</Link>
      <h3 className="my-4 text-center">Edit your product</h3>
      <form onSubmit={edit} >

        <div className="my-3 col-4 offset-sm-4">
          <label>Title: </label>
          <input className="form-control" type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" />
          <p className="text-danger">{errors.title ? errors.title.message : ''}</p>
        </div>

        <div className="my-3 col-4 offset-sm-4">
          <label>Price: </label>
          <input className="form-control" type="number" value={price} onChange={e => setPrice(e.target.value)} placeholder="Price" />
          <p className="text-danger">{errors.price ? errors.price.message : ''}</p>
        </div>

        <div className="my-3 col-4 offset-sm-4">
          <label>Description: </label>
          <input className="form-control" type="text" value={description} onChange={e => setDescription(e.target.value)} placeholder="Description" />
          <p className="text-danger">{errors.description ? errors.description.message : ''}</p>
        </div>
        <button className="my-3 btn btn-dark col-2 offset-sm-5" type="submit">Edit</button>
      </form>
    </div>
  )
}

export default EditForm
