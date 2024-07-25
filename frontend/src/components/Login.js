import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import validation from './LoginValidation';
import axios from 'axios';

function Login({ onLogin }) {
    const [values, setValues] = useState({ email: '', password: '' });
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    const [submitting, setSubmitting] = useState(false);

    const handleInput = (event) => {
        const { name, value } = event.target;
        setValues(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitting(true);
        const validationErrors = validation(values);
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            axios.post('http://localhost:8081/login', values)
                .then(res => {
                    if (res.data === "Success") {
                        onLogin();  // Call onLogin to update the login state in App
                        navigate('/home');
                    } else {
                        alert("Invalid credentials");
                    }
                })
                .catch(err => {
                    console.error('Error from backend:', err);
                    alert("Failed to login");
                })
                .finally(() => {
                    setSubmitting(false);
                });
        } else {
            setSubmitting(false);
        }
    };

    return (
        <div className='modal-overlay'>
            <div className='modal-content'>
                <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
                    <div className='bg-white p-3 rounded w-25'>
                        <h2>Sign-in</h2>
                        <form onSubmit={handleSubmit}>
                            <div className='mb-3'>
                                <label htmlFor="email"><strong>Email</strong></label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder='Enter Email'
                                    name="email"
                                    value={values.email}
                                    onChange={handleInput}
                                    className='form-control rounded-0'
                                />
                                {errors.email && <span className="text-danger">{errors.email}</span>}
                            </div>
                            <div className='mb-3'>
                                <label htmlFor="password"><strong>Password</strong></label>
                                <input
                                    type="password"
                                    id="password"
                                    placeholder='Enter Password'
                                    name="password"
                                    value={values.password}
                                    onChange={handleInput}
                                    className='form-control rounded-0'
                                />
                                {errors.password && <span className="text-danger">{errors.password}</span>}
                            </div>
                            <button type="submit" className='btn btn-success w-100 rounded-0' disabled={submitting}>
                                {submitting ? 'Logging in...' : 'Log in'}
                            </button>
                            <p>You agree to our terms and policies</p>
                            <Link to="/signup" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Create Account</Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
