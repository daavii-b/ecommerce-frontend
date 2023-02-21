import { toast } from 'react-toastify';
import { isEmail } from 'validator';

export const usernameIsValid = (username) =>
  !(username.length < 3 || username.length > 35);
export const firstNameIsValid = (firstName) =>
  !(firstName.length < 3 || firstName.length > 45);
const lastNameIsValid = (lastName) =>
  !(lastName.length < 3 || lastName.length > 45);

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

export { isEmail };
