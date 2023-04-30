import React from 'react';
import NavigationBar from '../Shared/NavigationBar/NavigationBar';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <div className="mb-3 w-50 mx-auto border border-2 p-5 rounded">

                <h3 className='text-center text-success'>Login Your Account!!</h3>
                <label className=""><h6>Your Email</h6></label>
                <input type="email" required name='email' className="form-control mb-2" id="email" placeholder="Enter Email" />

                <label className=""><h6>Your Password</h6></label>
                <input type="password" required className="form-control" name='password' id="password" placeholder="Enter Password" />
                <input style={{ fontWeight: "bold" }} type="submit" className="form-control mt-4 bg-black text-white" value="Login" />
                <p className='mt-4 text-center' style={{ fontWeight: 'bold' }}>Do Not Have An Account ?
                    <small>
                        <Link to="/register" className='text-danger'> Register</Link>
                    </small>
                </p>
            </div>
        </div>
    );
};

export default Login;