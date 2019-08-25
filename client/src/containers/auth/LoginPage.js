import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Login from "../../components/auth/Login";
import Validate from "../../components/form/Validate";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import { clearErrors } from "../../actions/errorActions";

const LoginPage = ({ loginUser, auth, errors, history, clearErrors }) => {
   const [user, setUser] = useState({
      email: "",
      password: "",
      errors: {}
   });

   const [message, setMessage] = useState("");

   // clearing error incase user switches to login page while already having errors in signup page
   useEffect(() => {
      const unlisten = history.listen(() => clearErrors());
      if (localStorage.loginMessage) {
         setMessage(localStorage.loginMessage);
         localStorage.setItem("loginMessage", "");
      }
      return () => unlisten();
   }, [history, clearErrors]);

   useEffect(() => {
      if (auth.isAuthenticated) {
         history.push("/blog");
      }
      setUser(user => {
         return { ...user, errors };
      });
   }, [auth, errors, history]);

   const handleChange = e => {
      setUser({
         ...user,
         [e.target.name]: e.target.value
      });
   };

   const handleBlur = e => {
      const { name, value } = e.target;
      const error = { ...user.errors, ...Validate(name, value).errors };
      setUser({ ...user, errors: { ...error } });
   };

   const handleSubmit = e => {
      e.preventDefault();
      const { email, password } = user;
      loginUser({ email, password });
   };

   return (
      <Login
         message={message}
         loading={auth.userLoading}
         user={{ ...user }}
         onBlur={handleBlur}
         onChange={handleChange}
         onSubmit={handleSubmit}
      />
   );
};

LoginPage.propTypes = {
   loginUser: PropTypes.func.isRequired,
   clearErrors: PropTypes.func.isRequired,
   auth: PropTypes.object.isRequired,
   errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
   auth: state.auth,
   errors: state.errors
});

export default connect(
   mapStateToProps,
   { loginUser, clearErrors }
)(LoginPage);
