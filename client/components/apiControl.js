//Import API string from config file. We failed to set this in an envionrment variable inside the .env file. We beleive it could be an error related to webpack configuration. 

import { API } from './config';

// In this component <apiControl>, we contain all functions related to API calls to the server in order to fetch or create new data in a piece meal fashion. 

//Here is a GET request to the server API to get all data required to render the Home page of our application. Noted that the JSON response returned is a pending response that needs to be resolved outside the scope of this component. 

export const getMainData = () => {
  return fetch(`${API}/main`, {
    method: 'GET',
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));
};

//Here is a GET request to the server API to get SPECIFIC data required to render individual Post page. The "Id" parameter accepts an argument invoked from another component where the function has been called. Noted here that the Id needs to conform to the specific Id we want to query on the database. Currently, we do not have error checking functions to see whether the data has overlapped. 

export const getPostData = (id) => {
  return fetch(`${API}/post?id=${id}`, {
    method: 'GET',
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));
};

//Here is POST request to the server API to create an individual post along with its related data. The "post" parameter accepts an argument inovked from another component where the fuctnion has been called. Noted here that the post has been stringified. Issues related to Controller middleware and security issues, aka cors, remain unresolved. 

export const createPost = (post) => {
  return fetch(`${API}/post`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(post),
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));
};

//delete post 
export const deletePostData = (id) => {
  return fetch(`${API}/post?id=${id}`, {
    method: 'DELETE',
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));
};