import React, { useState } from 'react'
import styled from 'styled-components'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { useGlobalContext } from '../../context/globalContext';
import Button from '../Button/Button';
import { plus } from '../../utils/Icons';


function Register() {
    const {addIncome, getIncomes, error, setError} = useGlobalContext()
    const [inputState, setInputState] = useState({
        name: '',
        email: '',
        password: '',
    })
    const { name, email, password } = inputState;

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    const handleInput = name => e => {
        setInputState({...inputState, [name]: e.target.value})
        setError('')
    }

    // function verifyCredentials(inputEmail, inputPassword) {
    //     if (inputEmail === predefinedEmail && inputPassword === predefinedPassword) {
    //         setError("Login successful!");
    //         return true;
    //     } else {
    //         setError("Invalid email or password. Please try again.");
    //         return false;
    //     }
    // }

    // Function to validate email format
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Function to verify password length (at least 8 characters)
function validatePassword(password) {
    return password.length >= 8;
}

function getUserData() {
    return JSON.parse(localStorage.getItem('users')) || [];
}

// Function to validate login credentials
function validateLogin(email, password) {
    const users = getUserData();

    // Search for user with matching email and password
    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
        console.log(`Login successful! Welcome, ${user.name}.`);
        return true;
    } else {
        console.log('Invalid email or password. Please try again.');
        return false;
    }
}

    const handleSubmit = e => {
        e.preventDefault()
        // addIncome(inputState)
        // Check email and password
        if (!validateEmail(inputState.email)) {
            setError("Invalid email format.");
            return false
        }
        
        if (!validatePassword(inputState.password)) {
            setError("Password must be at least 8 characters long.");
            return false    
        }


        console.log(inputState)
        setInputState({
            name: '',
            email: '',
            password: '',
        })
    }

    return (
        <FormStyled onSubmit={handleSubmit}>
            <div className="center-container">
                <div>

                {error && <p className='error'>{error}</p>}
                <h1 >Register Page</h1>
                <br />
                <div className="input-control">
                    <input 
                        type="text" 
                        value={name}
                        name={'Name'} 
                        placeholder="Your Name"
                        onChange={handleInput('name')}
                        />
                </div>
                <div className="input-control">
                    <input 
                        type="text" 
                        value={email}
                        name={'Email'} 
                        placeholder="email ID"
                        onChange={handleInput('email')}
                        />
                </div>
                <div className="input-control">
                    <input value={password}  
                        type="password" 
                        name={'password'} 
                        placeholder={'your password'}
                        onChange={handleInput('password')} 
                        />
                </div>
                <br />
                
                <div className="submit-btn">
                        
                    <Button 
                        name={'Register'}
                        icon={plus}
                        bPad={'.8rem 1.6rem'}
                        bRad={'30px'}
                        bg={'var(--color-green)'}
                        color={'#fff'}
                        />
                        
                    <Button 
                        name={'Login'}
                        icon={plus}
                        bPad={'.8rem 1.6rem'}
                        bRad={'30px'}
                        bg={'var(--color-accent)'}
                        color={'#fff'}
                        />
                </div>
                </div>
            </div>
        </FormStyled>
    )
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
export default Register