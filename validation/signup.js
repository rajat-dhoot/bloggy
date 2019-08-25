const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = validateSignUpInput = data => {
   let errors = {};

   let { user_name, email, password } = data;
   //Converting empty fields to an empty string so that we can use validator function as it works only with strings
   user_name = !isEmpty(user_name) ? user_name : "";
   email = !isEmpty(email) ? email : "";
   password = !isEmpty(password) ? password : "";

   if (Validator.isEmpty(user_name)) {
      errors.user_name = "Username is required";
   }

   if (Validator.isEmpty(email)) {
      errors.email = "Email is required";
   } else if (!Validator.isEmail(email)) {
      errors.email = "Enter a valid email id";
   }

   if (Validator.isEmpty(password)) {
      errors.password = "Password is required";
   } else if (!Validator.isLength(password, { min: 6, max: 30 })) {
      errors.password = "Password must be at least 6 characters";
   }

   return {
      errors,
      isValid: isEmpty(errors)
   };
};
