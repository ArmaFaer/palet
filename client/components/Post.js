import React, { Component, Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Material from './Material';
import { getMainData, getPostData } from './apiControl';
import { deletePostData } from './apiControl'



const Post = (props) => {
  const [postData, setPostData] = useState({
    post_id: '',
    user_id: '',
    artist_name: '',
    process: '',
    artist_page: '',
    image_src: '',
    materialList: [],
  });

  const { materialList } = postData;

  const [error, setError] = useState(false);

  const loadData = () => {
    getPostData(props.match.params.postId).then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setPostData(data);
      }
    });
  };

  useEffect(() => {
    loadData();
  }, {});

  const deletePost = () => {
    deletePostData(postData.post_id);
  }

  return (
    //renders post data and materials components
    <div className='postContainer'>
      <img src={postData.image_src} className='artistImage' />
      <div className='postInfo'>
        <h2>{postData.artist_name}</h2>
        <a href={postData.artist_page}>Artist Website</a>
        <p>Process: {postData.process}</p>
      </div>
      <div className="materialsList">
        <h4> Materials Used</h4>
        {materialList.map((item, index) => {
          return <Material key={index} item={item} />;
        })}
      </div>
      <Link to="/"><a className="deletePostBtn" onClick={deletePost}>Delete Post</a></Link>
    </div>
  );
};

export default Post;
