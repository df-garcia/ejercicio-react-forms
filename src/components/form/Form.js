import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Row";

import useForm from "../../customHooks/useForm";

import validateForm from "../../utils/validateForm";

const CustomForm = (props) => {
  const { handleChange, handleSubmit, errors } = useForm(
    validateForm,
    props.formFields
  );

  let fields = props.formFields.map((field, index) => {
    return (
      <Form.Group as={Row} key={index}>
        <Form.Label column sm={1} htmlFor={field.name}>
          {field.placeholder}
        </Form.Label>
        <Col sm={11}>
          <Form.Control
            type={field.type}
            name={field.name}
            placeholder={field.placeholder}
            id={field.id}
            onChange={handleChange}
          />
          {errors[field.name] && (
            <Form.Text className="text-muted">
              Error: {errors[field.name]}
            </Form.Text>
          )}
        </Col>
      </Form.Group>
    );
  });

  return (
    <div>
      <h1>{props.formName}</h1>
      <Form onSubmit={handleSubmit}>
        {fields}
        <Button type="submit">Submit data</Button>
      </Form>
    </div>
  );
};

export default CustomForm;
