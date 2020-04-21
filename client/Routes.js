import Home from './components/Home';
import NavBar from './components/NavBar';
import CreatePost from './components/CreatePost';
import Post from './components/Post';

import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//In this application, we have adopted React Router in order to create resusable, functional components throughout the UI. I

const Routes = () => {
  //Routes function allow the routing of different components in accordance with the <path> value specified. If, for example, the  /createPost, then our router automatically renders CreatePost component. This simple logic allows for a multipage application without having to worry about the storage of excessive, complex states. 
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/createPost' exact component={CreatePost} />
        <Route path='/post/:postId' exact component={Post} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
