import React from 'react';
import NavigationBar from '../Shared/NavigationBar/NavigationBar';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import useTitle from '../../Hooks/useTitle';

const Login = () => {
    useTitle('Login')

    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        signIn(email, password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser)
            navigate(from)
        })
        .catch(error =>{
            console.log(error.message);
        })
    }

    return (
        <div>
            <NavigationBar></NavigationBar>
            <form onSubmit={handleLogin} className="mb-3 w-50 mx-auto border border-2 p-5 rounded">

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
            </form>
        </div>
    );
};

export default Login;