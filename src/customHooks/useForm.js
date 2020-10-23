import { useState } from "react";

const useForm = (validateForm, formFields) => {
  const [errors, setErrors] = useState({});

  let initialState = {};
  formFields.forEach((field) => (initialState[field.name] = ""));
  const [values, setValues] = useState(initialState);

  const handleChange = (event) => {
    console.log(event.target.name);
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validateForm(values, formFields));
  };

  return { handleChange, handleSubmit, errors };
};

export default useForm;
