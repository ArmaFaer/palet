import React, { Component, Fragment, useState } from "react";
import { Link, withRouter } from 'react-router-dom';
import { createPost } from './apiControl'

// Create new post and change its state to what the user inputted
const CreatePost = () => {

  const [newPostInfo, setNewPostInfo] = useState({
    user_id: 1,
    artist_name: "",
    process: "",
    artist_page: "",
    image_src: "",
    materialList: [],
    material_name: "",
    material_type: "",
    material_link: "",
  });

  // const [materialList, setMaterialList] = useState([])

  // Destructuring information that was received from the user
  const { artist_name, process, artist_page, image_src, materialList, material_name, material_type, material_link } = newPostInfo;

  // Handles key strokes and set state of the property to user input 
  const handleChange = (key, event) => {
    setNewPostInfo({
      ...newPostInfo,
      [key]: event.target.value,
    });
  }

  // Add material to new post
  const submitMaterial = (event) => {
    event.preventDefault();
    // Create new material
    let newMaterial = {
      name: material_name,
      type: material_type,
      purchase_link: material_link,
    };
    setNewPostInfo({
      ...newPostInfo,
      // Add new material to material list in state
      materialList: [...materialList, newMaterial],
      // Reset forms regarding materials
      material_type: '',
      material_name: '',
      material_link: '',
    });
  }

  // Adds post to database
  const postSubmit = (event) => {
    event.preventDefault();
    // Send post data to the server
    createPost(newPostInfo)
      .then(data => {
        // Reset forms regarding posts
        setNewPostInfo({
          ...newPostInfo,
          artist_name: "",
          process: "",
          artist_page: "",
          image_src: "",
        });
      });
  };


  return (
    <div className="createPostContainer">
      {/* form to sumbit each material */}
      <form className='materialsForm' onSubmit={submitMaterial}>
        <div className='form-group'>
          <label for='materials'>Materials</label>
          <input type='text' value={material_name} onChange={e => handleChange('material_name', e)} />
        </div>

        <div className='form-group'>
          <label for='materials'>Materials Type</label>
          <input type='text' value={material_type} onChange={e => handleChange('material_type', e)} />
        </div>

        <div className='form-group'>
          <label for='materials'>Materials Link</label>
          <input type='text' value={material_link} onChange={e => handleChange('material_link', e)} />
        </div>

        <input type="submit" value="Add Material" />
      </form>

      {/* form to submit then entire post. Render this before render the form above. Add some logic? */}
      <form className="mainForm" onSubmit={postSubmit}>
        <div className='form-group'>
          <label for='name'>Artist Name</label>
          <input type='text' value={artist_name} onChange={e => handleChange('artist_name', e)} />
        </div>

        <div className='form-group'>
          <label for='materials'>Artist Website Link</label>
          <input type='text' value={artist_page} onChange={e => handleChange('artist_page', e)} />
        </div>

        <div className='form-group'>
          <label for='materials'>Art Image Link</label>
          <input type='text' value={image_src} onChange={e => handleChange('image_src', e)} />
        </div>

        <div className='form-group'>
          <label for='materials'>Process</label>
          <input type='text' value={process} onChange={e => handleChange('process', e)} />
        </div>

        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default CreatePost;