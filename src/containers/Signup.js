import { useState } from 'react';
import { Redirect, useHistory } from 'react-router';
import { setActiveUser, selectorUserName } from '../backend/userSlice';
import { signUpWithMail, signUpWithGoogle } from '../backend/firebaseMethods';
import { useDispatch, useSelector } from 'react-redux';
import right from '../assets/img/image__right.png';
import Header from '../components/Header';
import Button from '../components/Inputs/Button';
import RoundedButton from '../components/Inputs/RoundedButton';
import google from '../assets/icons/google.svg';
import Footer from '../components/Footer';
import '../assets/styles/containers/Auth.scss';

const Signup = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const userName = useSelector(selectorUserName);

    const [newUser, setNewUser] = useState({
        displayName: '',
        email: '',
        password: '',
    })
    const [error, setError] = useState('');

    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        setNewUser({
            ...newUser,
            [name]: value,
        });
    }

    const handleSignin = () => {
        history.push('/login');
    }

    const handleSignup = () => {
        signUpWithMail(newUser.email, newUser.password, newUser)
            .then((res) => {
                dispatch(setActiveUser(res))
            })
    }

    const handleGoogle = () => {
        signUpWithGoogle()
            .then((res) => {
                dispatch(setActiveUser(res))
            })
    }

    if (userName) {
        return <Redirect to='/' />
    }

    return (
        <>
            <Header />
            <div className="Signup">
                <div className="container">
                    <div className="row">
                        <div className="col-4 signup">
                            <h2 className="Login--title">
                                Ohh, first time here?
                                <br />
                                Well, let's do this fast
                            </h2>
                            <input className='InputText' onChange={(e) => onChangeHandler(e)} type='text' value={newUser.displayName} name='displayName' placeholder='name' />
                            <input className='InputText' onChange={(e) => onChangeHandler(e)} type='email' value={newUser.email} name='email' placeholder='email' />
                            <input className='InputText' onChange={(e) => onChangeHandler(e)} type='password' value={newUser.password} name='password' placeholder='password' />
                            <div className="row">
                                <div className="col-4 button-auth">
                                    <Button type='secondary' message="Hey, I've account" handler={handleSignin} />
                                </div>
                                <div className="col-4 button-auth">
                                    <Button type='primary' message='Sign up!' handler={handleSignup} />
                                </div>
                            </div>
                            <h2 className="Login--subtitle">
                                Or you can use...
                        </h2>
                            <RoundedButton type='google' handler={handleGoogle} img={google} />
                        </div>
                        <div className="col-4">
                            <img src={right} alt="" className='image-right' />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Signup;
