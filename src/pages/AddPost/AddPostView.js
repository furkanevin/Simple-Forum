import React from 'react'
import Header from '../../components/Header/Header';


const AddPostView = ({ handleSubmit,onInputChange}) => {
  return (
    <>
     <Header/>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>User</label>
          <input
            type={'text'}
            onChange={(e) => onInputChange('user', e.target.value)}
          />
        </fieldset>
        <fieldset>
          <label>Title</label>
          <input
            type={'text'}
            onChange={(e) => onInputChange('title', e.target.value)}
          />
        </fieldset>
        <fieldset>
          <label>Text</label>
          <textarea onChange={(e) => onInputChange('text', e.target.value)} />
        </fieldset>
        <button type="submit">Gönder</button>
      </form>
    </>
  );
};

export default AddPostView