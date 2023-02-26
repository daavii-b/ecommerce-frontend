import React, { useContext, useState, useRef, useLayoutEffect } from 'react';
import { FaRegUser } from 'react-icons/fa';
import { CiEdit } from 'react-icons/ci';
import { BsCheckCircleFill, BsInfoCircleFill } from 'react-icons/bs';
import { AiFillCloseCircle, AiOutlineLink } from 'react-icons/ai';
import { isEqual } from 'lodash';
import { Section } from './styled';
import { AuthContext } from '../../context/auth';
import { editFormValidator } from '../../utils/form/validators';

export default function User() {
  // Elements References
  const refEditForm = useRef(null);
  const refSubmitButton = useRef(null);
  const refInfoList = useRef(null);
  const refFirstName = useRef(null);
  const refLastName = useRef(null);
  const refUsername = useRef(null);
  const refEmail = useRef(null);

  // States to inputs
  const { user, updateUser } = useContext(AuthContext);
  const [firstName, setFirstName] = useState(user.first_name);
  const [lastName, setLastName] = useState(user.last_name);
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);

  // Remove inputs
  useLayoutEffect(() => {
    refSubmitButton.current.classList.remove('enabled');

    refFirstName.current.remove();
    refLastName.current.remove();
    refUsername.current.remove();
    refEmail.current.remove();

    const buttonsDisabled = refInfoList.current.querySelectorAll(
      `.edit-button[disabled]`
    );

    buttonsDisabled.forEach((button) => {
      button.removeAttribute('disabled');
    });
  }, [user]);

  function getUserFullName(userD) {
    return `${userD.first_name} ${userD.last_name}`;
  }

  function handleEditClick(e) {
    const button = e.currentTarget;

    if (!button.disabled) {
      const field = button.getAttribute('data-field');

      if (field === 'firstName') {
        refEditForm.current.insertBefore(
          refFirstName.current,
          refSubmitButton.current
        );
        refFirstName.current.classList.add('enabled');
      } else if (field === 'lastName') {
        refEditForm.current.insertBefore(
          refLastName.current,
          refSubmitButton.current
        );
        refLastName.current.classList.add('enabled');
      } else if (field === 'username') {
        refEditForm.current.insertBefore(
          refUsername.current,
          refSubmitButton.current
        );
        refUsername.current.classList.add('enabled');
      } else if (field === 'email') {
        refEditForm.current.insertBefore(
          refEmail.current,
          refSubmitButton.current
        );
        refEmail.current.classList.add('enabled');
      }

      refEditForm.current.classList.add('enabled');

      refSubmitButton.current.setAttribute('disabled', true);

      button.toggleAttribute('disabled');
    }
  }

  function handleCloseClick(event) {
    const button = event.currentTarget;
    const buttonParent = button.parentNode.parentNode;

    const field = button.getAttribute('data-field');
    const editButton = document.querySelector(
      `.edit-button[data-field="${field}"]`
    );

    buttonParent.classList.remove('enabled');

    setTimeout(() => {
      buttonParent.remove();

      if (refEditForm.current.childElementCount === 1)
        refEditForm.current.classList.remove('enabled');

      editButton.toggleAttribute('disabled');
    }, 380);
  }

  function enableSaveButton(newFiled, oldField) {
    if (newFiled !== oldField) {
      refSubmitButton.current.removeAttribute('disabled');
      refSubmitButton.current.classList.add('enabled');
    } else {
      refSubmitButton.current.setAttribute('disabled', true);
      refSubmitButton.current.classList.remove('enabled');
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    const newUserData = {
      username,
      first_name: firstName,
      last_name: lastName,
      email,
    };

    // eslint-disable-next-line no-unused-vars
    const { email_verified: _, ...compareUser } = user;

    if (
      !isEqual(newUserData, compareUser) &&
      editFormValidator(newUserData).isValid
    ) {
      updateUser(newUserData);
      refEditForm.current.classList.remove('enabled');
    }
  }

  return (
    <Section>
      <header>
        <div className="user-header-info">
          <span className="icon">
            <FaRegUser size={16} />
          </span>
          <h2>{user.username}</h2>
        </div>
      </header>
      <article className="user-data">
        <ul ref={refInfoList} className="user-info-list">
          <li className="field-data">
            <p>
              <span>Username:</span> {user.username}
            </p>
            <div className="edit-user">
              <button
                type="button"
                className="edit-button"
                aria-label="Edit your username"
                data-field="username"
                data-value={user.username}
                onClick={handleEditClick}
              >
                <CiEdit size={18} />
              </button>
            </div>
          </li>
          <li className="field-data">
            <p>
              <span>First name:</span> {user.first_name}
            </p>
            <div className="edit-user">
              <button
                type="button"
                className="edit-button"
                aria-label="Edit your first name"
                data-field="firstName"
                data-value={user.first_name}
                onClick={handleEditClick}
              >
                <CiEdit size={18} />
              </button>
            </div>
          </li>
          <li className="field-data">
            <p>
              <span>Last name:</span> {user.last_name}
            </p>
            <div className="edit-user">
              <button
                type="button"
                className="edit-button"
                aria-label="Edit your last name"
                data-field="lastName"
                data-value={user.last_name}
                onClick={handleEditClick}
              >
                <CiEdit size={18} />
              </button>
            </div>
          </li>
          <li className="field-data">
            <p>
              <span>Fullname:</span> {getUserFullName(user)}
            </p>
          </li>
          <li className="field-data">
            <p>
              <span>E-mail:</span> {user.email}
            </p>
            <span
              className="email-feedback"
              data-feedback={
                user.email_verified ? 'Email verified' : 'Email not verified'
              }
            >
              {user.email_verified ? (
                <BsCheckCircleFill className="verified" />
              ) : (
                <BsInfoCircleFill className="not-verified" />
              )}
            </span>
            <div className="edit-user">
              <button
                type="button"
                className="edit-button"
                aria-label="Edit your email address"
                data-field="email"
                data-value={user.email}
                onClick={handleEditClick}
              >
                <CiEdit size={18} />
              </button>
            </div>
          </li>
        </ul>
      </article>

      <section className="edit-section">
        <form
          ref={refEditForm}
          aria-label="Form to edit user data"
          onSubmit={handleSubmit}
          className="edit-form"
          method="POST"
        >
          <div
            ref={refUsername}
            className="field-container"
            data-field="username"
          >
            <label className="field-label" htmlFor="username">
              Username:
              <input
                className="field-input"
                type="text"
                name="username"
                id="username"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                  enableSaveButton(e.target.value, user.username);
                }}
                placeholder="Type your new username"
              />
            </label>
            <div className="close-button-container">
              <button
                aria-label="Remove username input"
                type="button"
                className="close-button"
                data-field="username"
                onClick={handleCloseClick}
              >
                <AiFillCloseCircle />
              </button>
            </div>
          </div>
          <div
            ref={refFirstName}
            className="field-container"
            data-field="firstName"
          >
            <label className="field-label" htmlFor="firstName">
              First name:
              <input
                className="field-input"
                type="text"
                name="firstName"
                id="firstName"
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                  enableSaveButton(e.target.value, user.first_name);
                }}
                placeholder="Type your new first name"
              />
            </label>
            <div className="close-button-container">
              <button
                aria-label="Remove first name input"
                type="button"
                className="close-button"
                data-field="firstName"
                onClick={handleCloseClick}
              >
                <AiFillCloseCircle />
              </button>
            </div>
          </div>
          <div
            ref={refLastName}
            className="field-container"
            data-field="lastName"
          >
            <label className="field-label" htmlFor="lastName">
              Last name:
              <input
                className="field-input"
                type="text"
                name="lastName"
                id="lastName"
                value={lastName}
                onChange={(e) => {
                  enableSaveButton(e.target.value, user.last_name);
                  setLastName(e.target.value);
                }}
                placeholder="Type your new last name"
              />
            </label>
            <div className="close-button-container">
              <button
                aria-label="Remove last name input"
                type="button"
                className="close-button"
                data-field="lastName"
                onClick={handleCloseClick}
              >
                <AiFillCloseCircle />
              </button>
            </div>
          </div>
          <div ref={refEmail} className="field-container" data-field="email">
            <label className="field-label" htmlFor="email">
              E-mail:
              <input
                className="field-input"
                type="text"
                name="email"
                id="email"
                value={email}
                onChange={(e) => {
                  enableSaveButton(e.target.value, user.email);
                  setEmail(e.target.value);
                }}
                placeholder="Type your new email address"
              />
            </label>
            <div className="close-button-container">
              <button
                aria-label="Remove email input"
                type="button"
                className="close-button"
                data-field="email"
                onClick={handleCloseClick}
              >
                <AiFillCloseCircle />
              </button>
            </div>
          </div>

          <button
            ref={refSubmitButton}
            aria-label="Button to submit edit form"
            action="#"
            type="submit"
            className="submit-button"
          >
            Save
          </button>
        </form>
      </section>
      <footer className="change-password-footer">
        <a
          aria-label="Change password link"
          href="/users/change-password"
          className="change-password-link"
        >
          <p>
            Change Password{' '}
            <span>
              <AiOutlineLink className="link-icon" />
            </span>
          </p>
        </a>
      </footer>
    </Section>
  );
}
