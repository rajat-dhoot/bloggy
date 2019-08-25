import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";

import LoginPage from "./containers/auth/LoginPage";
import SignUpPage from "./containers/auth/SignUpPage";

import ProgressBar from "./containers/layout/ProgressBar";
import Navbar from "./containers/layout/Navbar";
import Landing from "./components/layout/Landing";
import BlogPage from "./containers/BlogPage";
import PrivateRoute from "./utils/PrivateRoute";

import ViewPostPage from "./containers/posts/ViewPostPage";
import CreatePostPage from "./containers/posts/CreatePostPage";
import UpdatePostPage from "./containers/posts/UpdatePostPage";

if (localStorage.jwtToken) {
   const token = localStorage.jwtToken;
   setAuthToken(token);
   const decoded = jwt_decode(token);
   store.dispatch(setCurrentUser(decoded));
   const currentTime = Date.now() / 1000;
   if (decoded.exp < currentTime) {
      store.dispatch(logoutUser());
      window.location.href = "./loginPage";
   }
}

const App = () => {
   return (
      <Provider store={store}>
         <BrowserRouter>
            <ProgressBar />
            <Navbar />
            <Switch>
               <Route path="/" exact component={Landing} />
               <Route path="/login" component={LoginPage} />
               <Route path="/signup" component={SignUpPage} />
               <PrivateRoute exact path="/blog" component={BlogPage} />
               <PrivateRoute
                  exact
                  path="/blog/post/create"
                  component={CreatePostPage}
               />
               <PrivateRoute
                  exact
                  path="/blog/post/update/:id"
                  component={UpdatePostPage}
               />
               <Route exact path="/blog/post/:id" component={ViewPostPage} />
               <Route path="/blog/:author" component={BlogPage} />
               <Redirect from="*" to="/" />
            </Switch>
         </BrowserRouter>
      </Provider>
   );
};

export default App;
