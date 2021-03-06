import React from 'react';
import './Login.css';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Login</h2>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='ms-1'>Email address</Form.Label>
                        <Form.Control className='form-submit' type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className='ms-1'>Password</Form.Label>
                        <Form.Control className='form-submit' type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit"  className='form-submit mb-2'>
                        Login
                    </Button>
                </Form>
                <p className='link'>
                    New to Hotel-Booking? <Link className='form-link' to="/signup">Create an account</Link>
                </p>
                <div className='or-line'>
                    <div></div>
                    <p>or</p>
                    <div></div>
                </div>
                <div className='google-btn'>
                    <img src={`https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png`} alt="" />
                    <p className='mt-3'>Continue with Google</p>
                </div>
            </div>
        </div>
    );
};

export default Login;