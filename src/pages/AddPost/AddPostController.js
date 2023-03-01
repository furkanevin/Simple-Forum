import React, { useState } from 'react'
import AddPostView from './AddPostView'
import AddPostModel from './AddPostModel';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddPostController = () => {
  const model = new AddPostModel();
  const [form, setForm] = useState(model.state);
  const navigate = useNavigate()

  // Onchange ele alma
  const onInputChange = (label, value) => {
    var newInputState = { ...form };
    newInputState[label] = value;
    setForm(newInputState);
  };

  // Submiti ele alma:
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(!form.user || !form.title || !form.text ){
      console.log("no")
    }else{
      axios
        .post('http://localhost:3030/posts', form)
        .then((res) => navigate('/'))
        .catch((err) => {});
    }
   

  };

  return (
    <AddPostView onInputChange={onInputChange} handleSubmit={handleSubmit} />
  );
}

export default AddPostController