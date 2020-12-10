import React, { useState } from 'react';
import axios from 'axios';
// import { navigate } from '@reach/router';
import Show from './Show';

const Form = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState({});

  const create = e => {
    e.preventDefault();
    const prod = { title, price, description };
    axios.post("http://localhost:8000/api/products/new", prod)
      .then(res => {
        console.log(res.data);
        if (res.data.errors) {
          setErrors(res.data.errors);
        } else{
          setTitle("")
          setPrice(0)
          setDescription("")
          setErrors({})
          window.location.reload();
        }
      }).catch(err => {
        console.error(err);
      });
  }
  return (
    <div>
      <h3 className="mt-5 text-center">Product Manager</h3>
      <form onSubmit={create}>
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
        <button className="my-3 btn btn-dark col-2 offset-sm-5" type="submit">Create</button>
      </form>
      <Show />
    </div>
  )
}
export default Form
