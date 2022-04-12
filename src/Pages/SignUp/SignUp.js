import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Sign Up</h2>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='ms-1'>Email address</Form.Label>
                        <Form.Control className='form-submit' type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className='ms-1'>Password</Form.Label>
                        <Form.Control className='form-submit' type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className='ms-1'>Confirm Password</Form.Label>
                        <Form.Control className='form-submit' type="password" placeholder="Confirm Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit" className='form-submit mb-2'>
                        Login
                    </Button>
                </Form>
                <p className='link'>
                    Already Have an account? <Link className='form-link' to="/login">Login</Link>
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

export default SignUp;