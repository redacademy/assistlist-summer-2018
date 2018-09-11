export function validateLogin(values) {
  const errors = {};
  if (!values.email) {
    errors.email = 'Required';
  }
  if (!values.password) {
    errors.password = 'Required';
  }
  return errors;
}

export function validateSignup(values) {
  const errors = {};
  if (!values.email) {
    errors.email = 'Required';
  }
  if (!values.password) {
    errors.password = 'Required';
  }
  if (!values.verifyPassword) {
    errors.verifyPassword = 'Required';
  }
  if (!values.username) {
    errors.username = 'Required';
  }
  if (values.password !== values.verifyPassword) {
    errors.verifyPassword = 'Password does not match';
  }
  return errors;
}
