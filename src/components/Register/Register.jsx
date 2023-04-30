import React from 'react';
import NavigationBar from '../Shared/NavigationBar/NavigationBar';
import { Form, Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <div className="mb-3 w-50 mx-auto border border-2 p-5 rounded">
                <h3 className='text-center text-success'>Register Your Account!!</h3>
                <label className=""><h6>Your Name</h6></label>
                <input type="text" name='name' required className="form-control mb-2" id="name" placeholder="Enter Your Name" />

                <label className=""><h6>Your Photo</h6></label>
                <input type="text" required name='photo' className="form-control mb-2" id="photo" placeholder="Enter Photo URL" />

                <label className=""><h6>Your Email</h6></label>
                <input type="email" name='email' className="form-control mb-2" id="email" placeholder="Enter Email" />

                <label className=""><h6>Your Password</h6></label>
                <input type="password" className="form-control" name='password' id="password" placeholder="Enter Password" />

                <Form className="mt-2 d-flex" controlId="formBasicCheckbox">
                    <input type="checkbox" label="Check me out" />
                     <p className='ms-2'>Accept Terms & Condition</p>
                </Form>


                <input style={{ fontWeight: "bold" }} type="submit" className="form-control bg-black text-white" value="Login" />

                <p className='mt-3 text-center' style={{ fontWeight: 'bold' }}>Have An Account ?
                    <small>
                        <Link to="/login" className='text-danger'> Login</Link>
                    </small>
                </p>
            </div>
        </div>
    );
};

export default Register;