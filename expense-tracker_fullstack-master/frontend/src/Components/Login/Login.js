import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';
import { plus } from '../../utils/Icons';
import App from '../../App';

function Form({ active, setActive, redirectAfterLogin }) {
    const [inputState, setInputState] = useState({
        name: '',
        email: '',
        password: '',
    });
    const { name, email, password } = inputState;

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [showRegister, setShowRegister] = useState(false);

    const handleInput = (field) => (e) => {
        setInputState({ ...inputState, [field]: e.target.value });
        setError('');
    };

    // Validate email format
    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    // Validate password length
    const validatePassword = (password) => {
        return password.length >= 8;
    };

    // Retrieve users from local storage
    const getUserData = () => {
        return JSON.parse(localStorage.getItem('users')) || [];
    };

    // Save registered user data in local storage
    const registerUser = (name, email, password) => {
        let users = getUserData();

        // Check if email already exists
        const existingUser = users.find((user) => user.email === email);
        if (existingUser) {
            setError('User with this email already exists.');
            return false;
        }

        // Add new user
        users.push({ name, email, password });
        localStorage.setItem('users', JSON.stringify(users));
        setSuccess('Registration successful!');
        return true;
    };

    // Validate login credentials
    const validateLogin = (email, password) => {
        let users = getUserData();

        // Check if credentials match
        const user = users.find((user) => user.email === email && user.password === password);
        if (user) {
            user.isLogin = true
            localStorage.setItem('LoginUser', JSON.stringify(user)); // Save logged-in user
            setSuccess(`Login successful! Welcome, ${user.name}.`);
            setTimeout(() => {
                window.location.reload()
            }, 2000);
            return true;
        } else {
            setError('Invalid email or password.');
            return false;
        }
    };

    const handleSubmitLogin = (e) => {
        e.preventDefault();

        // Validate login
        if (!validateEmail(email)) {
            setError('Invalid email format.');
            return;
        }

        if (!validatePassword(password)) {
            setError('Password must be at least 8 characters long.');
            return;
        }

        validateLogin(email, password);

        // Reset input fields
        setInputState({
            name: '',
            email: '',
            password: '',
        });
    };

    const handleSubmitRegister = (e) => {
        e.preventDefault();

        // Validate registration
        if (!validateEmail(email)) {
            setError('Invalid email format.');
            return;
        }

        if (!validatePassword(password)) {
            setError('Password must be at least 8 characters long.');
            return;
        }

        registerUser(name, email, password);

        // Reset input fields
        setInputState({
            name: '',
            email: '',
            password: '',
        });
    };

    // Toggle between Login and Register forms
    const toggleForm = () => {
        setShowRegister(!showRegister);
    };

    return (
        <div>
            {showRegister ? (
                // Register Form
                <FormStyled onSubmit={handleSubmitRegister}>
                    <div className="center-container">
                        <div>
                            {error && <p className="error">{error}</p>}
                            {success && <p className="success">{success}</p>}
                            <h1>Register Page</h1>
                            <br />
                            <div className="input-control">
                                <input
                                    type="text"
                                    name="Name"
                                    placeholder="Name"
                                    value={name}
                                    onChange={handleInput('name')}
                                />
                            </div>
                            <div className="input-control">
                                <input
                                    type="text"
                                    name="Email"
                                    placeholder="Email ID"
                                    value={email}
                                    onChange={handleInput('email')}
                                />
                            </div>
                            <div className="input-control">
                                <input
                                    type="password"
                                    name="Password"
                                    placeholder="Your Password"
                                    value={password}
                                    onChange={handleInput('password')}
                                />
                            </div>
                            <br />
                            <div className="submit-btn">
                                <Button
                                    name="Register"
                                    icon={plus}
                                    bPad=".8rem 1.6rem"
                                    bRad="30px"
                                    bg="var(--color-accent)"
                                    color="#fff"
                                />
                                <Button
                                    type="button"
                                    name="Back to Login"
                                    icon={plus}
                                    bPad=".8rem 1.6rem"
                                    bRad="30px"
                                    bg="var(--primary-color)"
                                    color="#fff"
                                    onClick={toggleForm}
                                />
                            </div>
                        </div>
                    </div>
                </FormStyled>
            ) : (
                // Login Form
                <FormStyled onSubmit={handleSubmitLogin}>
                    <div className="center-container">
                        <div>
                            {error && <p className="error">{error}</p>}
                            {success && <p className="success">{success}</p>}
                            <h1>Login Page</h1>
                            <br />
                            <div className="input-control">
                                <input
                                    type="text"
                                    name="Email"
                                    placeholder="Email ID"
                                    value={email}
                                    onChange={handleInput('email')}
                                />
                            </div>
                            <div className="input-control">
                                <input
                                    type="password"
                                    name="Password"
                                    placeholder="Your Password"
                                    value={password}
                                    onChange={handleInput('password')}
                                />
                            </div>
                            <br />
                            <div className="submit-btn">
                                <Button
                                    name="Login"
                                    icon={plus}
                                    bPad=".8rem 1.6rem"
                                    bRad="30px"
                                    bg="var(--primary-color)"
                                    color="#fff"
                                />
                                <Button
                                    type="button"
                                    name="Register"
                                    icon={plus}
                                    bPad=".8rem 1.6rem"
                                    bRad="30px"
                                    bg="var(--color-accent)"
                                    color="#fff"
                                    onClick={toggleForm}
                                />
                            </div>
                        </div>
                    </div>
                </FormStyled>
            )}
        </div>
    );
}

const FormStyled = styled.form`
    // display: flex;
    // flex-direction: column;
    // gap: 2rem;
    input, textarea, select{
        font-family: inherit;
        font-size: inherit;
        outline: none;
        border: none;
        padding: .5rem 1rem;
        border-radius: 5px;
        border: 2px solid #fff;
        background: transparent;
        resize: none;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        color: rgba(34, 34, 96, 0.9);
        &::placeholder{
            color: rgba(34, 34, 96, 0.4);
        }
    }
    .input-control{
        input{
            width: 100%;
            margin: 10px;
        }
    }

    .selects{
        display: flex;
        justify-content: flex-end;
        select{
            color: rgba(34, 34, 96, 0.4);
            &:focus, &:active{
                color: rgba(34, 34, 96, 1);
            }
        }
    }

    .submit-btn{
        display: flex; 
        button{
            margin: 10px;
            box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
            &:hover{
                background: var(--color-green) !important;
            }
        }
    }

    .center-container {
    text-align:center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* full height of the viewport */
  background-color: #f5f5f5; /* optional background */
}
`;
export default Form