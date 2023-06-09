import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useTitle from '../../../custom_hooks/useTitle';

const LogIn = () => {
    useTitle('Log-In')
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/';
    const { logIn, logIn_with_google, logIn_with_gitHub } = useContext(AuthContext)
    const logInHandler = (e) => {
        e.preventDefault();
        const form = e.target
        const email = form.email.value;
        const password = form.password.value;
        logIn(email, password)
            .then(result => {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'LogIn Successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate(from, { replace: true })
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
                console.log(errorMessage)
            });
        console.log(email, password)
    }
    const googleLogInHandler = () => {
        logIn_with_google()
            .then(result => {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'LogIn Successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate(from, { replace: true })
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
                console.log(errorMessage)
            });
    }
    const githubLogInHandler = () => {
        logIn_with_gitHub()
            .then(result => {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'LogIn Successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate(from, { replace: true })
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
                console.log(errorMessage)
            });
    }

    return (
        <section className='h-screen'>
            <div className="pt-[5rem] container py-10 min-h-screen flex justify-center lg:flex-row gap-5 items-center">
                <div className='w-full lg:w-1/2 overflow-hidden'>
                    <div className='py-5'>
                        <h1 className='text-center uppercase text-3xl mb-2 font-black font-rancho text-animation'>Log-In</h1>
                        <p className='bg-primary border-dotted border-b-4 w-40 mx-auto mb-2'></p>
                        <p className='bg-secondary h-[2px] w-24 mx-auto'></p>
                    </div>
                    <form onSubmit={logInHandler} className='min-w-3xl' action="">
                        <div>
                            <label htmlFor="email"></label>
                            <input className='w-full py-2 px-5 mb-5 rounded-lg bg-transparent border-b-2 border-primary border-dotted' type="email" name="email" id="email" placeholder='Email' required />
                            <label htmlFor="password"></label>
                            <input className='w-full py-2 px-5 rounded-lg bg-transparent border-b-2 border-primary border-dotted' type="password" name="password" id="password" placeholder='Password' required />
                        </div>
                        <div className='py-2'><p className='text-warning my-2 text-center'>{error}</p></div>
                        <input className='btn btn-primary w-full font-rancho tracking-[3px] text-white' type="submit" value="Submit" />
                    </form>
                    <p className='text-center py-3'>New User? <Link to='/register' className='text-animation font-bold'>Register</Link> First. </p>
                    <div className='flex gap-3'>
                        <button onClick={googleLogInHandler} className='btn btn-outline border-dotted btn-primary rounded-lg flex-1 font-rancho'>
                            <FaGoogle /> <span className='ml-3'>LogIn With Google</span>
                        </button>
                        <button onClick={githubLogInHandler} className='btn btn-outline border-dotted btn-primary rounded-lg flex-1 font-rancho'>
                            <FaGithub /> <span className='ml-3'>LogIn With GitHub</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LogIn;