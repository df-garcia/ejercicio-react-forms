import React from "react";
import Form from "./components/form/Form";
import "./App.css";

const formFields = [
  {
    type: "text",
    name: "username",
    id: "username",
    placeholder: "Username",
    minLength: 3,
    maxLength: 10,
  },
  {
    type: "email",
    name: "email",
    id: "email",
    placeholder: "Email",
    minLength: 3,
    maxLength: 30,
  },
  {
    type: "password",
    name: "password",
    id: "password",
    placeholder: "Password",
    minLength: 8,
    maxLength: 15,
  },
  {
    type: "password",
    name: "confirmPassword",
    id: "confirmPassword",
    placeholder: "Confirm Password",
    minLength: 8,
    maxLength: 15,
  },
];

function App() {
  return <Form formFields={formFields} formName="Login Form" />;
}

export default App;
