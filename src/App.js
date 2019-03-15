import React from 'react';
import NavBar from './components/Header/NavBar'
import PostsList from './components/Posts/List';
import DisplayPost from './components/Posts/Display';
import AddPost from './components/Posts/Add';
import UsersList from './components/Users/List';
import UserDisplay from './components/Users/Display';
import AddUser from './components/Users/Add';
import CommentDispaly from './components/Comments/Display';
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <NavBar></NavBar>
      <Router>
        <div>
          <Route exact path="/posts" component={PostsList} ></Route>
          <Route exact path="/posts/:id" component={DisplayPost} ></Route>
          <Route path="/addPost" component={AddPost}></Route>
          <Route exact path="/users" component={UsersList} ></Route>
          <Route exact path="/users/:id" component={UserDisplay} ></Route>
          <Route exact path="/comments/:id" component={CommentDispaly}></Route>
          <Route path="/addUser" component={AddUser}></Route>
        </div>
      </Router>
    </>
  );
}

export default App;
