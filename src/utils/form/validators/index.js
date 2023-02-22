import { toast } from 'react-toastify';
import { isEmail } from 'validator';

export const usernameIsValid = (username) =>
  !(username.length < 3 || username.length > 35);
export const firstNameIsValid = (firstName) =>
  !(firstName.length < 3 || firstName.length > 45);
export const lastNameIsValid = (lastName) =>
  !(lastName.length < 3 || lastName.length > 45);

export const passwordIsEqual = (password, confirmPassword) =>
  password === confirmPassword;

export const passwordIsValid = (password) => password.length > 8;

export const emptyPasswordField = (password, confirmPassword) =>
  password.length === 0 || confirmPassword.length === 0;

export function editFormValidator(userData) {
  const {
    first_name: firstName,
    last_name: lastName,
    username,
    email,
  } = userData;
  const userObject = { user: { ...userData }, isValid: true };

  if (!usernameIsValid(username)) {
    toast.error('Username must have at least 3 characters');
    userObject.isValid = false;
  }
  if (!firstNameIsValid(firstName)) {
    toast.error('First name must have at least 3 characters');
    userObject.isValid = false;
  }
  if (!lastNameIsValid(lastName)) {
    toast.error('last name must have at least 3 characters');
    userObject.isValid = false;
  }

  if (!isEmail(email)) {
    toast.error('Email is invalid. Please enter a valid email address');
    userObject.isValid = false;
  }

  return userObject;
}

export function changePasswordFormValidator(userData) {
  const { password, confirmPassword } = userData;
  let isValid = true;

  if (emptyPasswordField(password, confirmPassword)) {
    toast.error('Password and confirmation password cannot be blank');
    return { isValid: false };
  }

  if (!passwordIsValid(password)) {
    toast.error('Password is invalid. Please enter a valid password');
    isValid = false;
  }
  if (!passwordIsEqual(password, confirmPassword)) {
    toast.error('Password and confirm password do not match');
    isValid = false;
  }

  return { isValid };
}

export { isEmail };
