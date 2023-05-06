import React, { useContext } from 'react';
import NavigationBar from '../Shared/NavigationBar/NavigationBar';
import { Form, Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import useTitle from '../../Hooks/useTitle';

const Register = () => {
    const { creatUser } = useContext(AuthContext)
    const [accept, setAccept] = useState(false)
    useTitle('Register')

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password);

        creatUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    const handleAccept = event => {
        setAccept(event.target.checked)
    }

    return (
        <div>
            <NavigationBar></NavigationBar>
            <form onSubmit={handleRegister} className="mb-3 w-50 mx-auto border border-2 p-5 rounded">
                <h3 className='text-center text-success'>Register Your Account!!</h3>
                <label className=""><h6>Your Name</h6></label>
                <input type="text" name='name' required className="form-control mb-2" id="name" placeholder="Enter Your Name" />

                <label className=""><h6>Your Photo</h6></label>
                <input type="text" required name='photo' className="form-control mb-2" id="photo" placeholder="Enter Photo URL" />

                <label className=""><h6>Your Email</h6></label>
                <input type="email" name='email' className="form-control mb-2" id="email" placeholder="Enter Email" />

                <label className=""><h6>Your Password</h6></label>
                <input type="password" className="form-control" name='password' id="password" placeholder="Enter Password" />

                <Form className="d-flex" controlId="formBasicCheckbox">
                    <input
                        onClick={handleAccept}
                        type="checkbox"
                        name='accept'
                        label="Check me out" />
                    <p className='ms-2 mt-3'>{<>Accept <Link to="/terms">Terms & Condition</Link></>}</p>
                </Form>
                <Button variant="primary" className='form-control' disabled={!accept} type="submit">
                    Register
                </Button>

                <p className='mt-3 text-center' style={{ fontWeight: 'bold' }}>Have An Account ?
                    <small>
                        <Link to="/login" className='text-danger'> Login</Link>
                    </small>
                </p>
            </form>
        </div>
    );
};

export default Register;