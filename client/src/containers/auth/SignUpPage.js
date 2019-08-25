import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import { clearErrors } from "../../actions/errorActions";
import Validate from "../../components/form/Validate";
import SignUp from "../../components/auth/SignUp";

const SignUpPage = ({ history, registerUser, auth, errors, clearErrors }) => {
   const [user, setUser] = useState({
      user_name: "",
      email: "",
      password: "",
      errors: {}
   });

   // clearing error incase user switches to login page while already having errors in login page
   useEffect(() => {
      const unlisten = history.listen(() => clearErrors());
      return () => unlisten();
   }, [history, clearErrors]);

   useEffect(() => {
      if (auth.isAuthenticated) history.push("/blog");
      setUser(user => {
         return { ...user, errors };
      });
   }, [errors, auth, history]);

   const handleChange = e => {
      setUser({
         ...user,
         [e.target.name]: e.target.value
      });
   };

   const handleBlur = e => {
      const { name, value } = e.target;
      const err = { ...user.errors, ...Validate(name, value).errors };
      setUser({ ...user, errors: { ...err } });
   };

   const handleSubmit = e => {
      e.preventDefault();
      const { user_name, email, password } = user;
      registerUser({ user_name, email, password }, history);
   };

   return (
      <SignUp
         loading={auth.userLoading}
         user={{ ...user }}
         onBlur={handleBlur}
         onChange={handleChange}
         onSubmit={handleSubmit}
      />
   );
};

SignUpPage.propTypes = {
   registerUser: PropTypes.func.isRequired,
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
   { registerUser, clearErrors }
)(SignUpPage);
