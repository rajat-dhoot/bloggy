import React from "react";
import Form from "react-bootstrap/Form";
import PropTypes from 'prop-types';

const Input = ({ name, type, placeholder, value, onChange, onBlur, text }) => {
   return (
      <Form.Group controlId={text.module + name}>
         <Form.Label>{text.label}</Form.Label>
         <Form.Control
            name={name}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            isInvalid={text.error ? true : false}
         />
         <Form.Control.Feedback type="invalid">
            {text.error}
         </Form.Control.Feedback>
      </Form.Group>
   );
};

Input.propTypes = {
   name: PropTypes.string.isRequired,
   type: PropTypes.string.isRequired,
   placeholder: PropTypes.string.isRequired,
   value: PropTypes.string.isRequired,
   onChange: PropTypes.func.isRequired,
   onBlur: PropTypes.func.isRequired,
   text: PropTypes.object.isRequired
}

export default Input;
