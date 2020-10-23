export default function validateForm(values, formFields) {
  const err = {};

  formFields.forEach((formField) => {
    if (values[formField.name].length < formField.minLength) {
      err[formField.name] =
        "Length of " + formField.placeholder + " is too short";
    }
    if (values[formField.name].length > formField.maxLength) {
      err[formField.name] =
        "Length of " + formField.placeholder + " is too long";
    }
  });

  return err;
}
