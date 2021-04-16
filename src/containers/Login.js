import { useState } from 'react';
import { Redirect, useHistory } from 'react-router';
import { signInMail, signUpWithGoogle } from '../backend/firebaseMethods';
import { selectorUserName, setActiveUser } from '../backend/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import Carousel from '../components/Carousel';
import Header from '../components/Header';
import Button from '../components/Inputs/Button';
import RoundedButton from '../components/Inputs/RoundedButton';
import google from '../assets/icons/google.svg';

const Login = (props) => {

    const history = useHistory();
    const dispatch = useDispatch();
    const userName = useSelector(selectorUserName);
    const [user, setUser] = useState({
        email: '',
        password: '',
    })
    const [error, setError] = useState('');

    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value,
          });
    }

    const handleSignin = () => {
        signInMail(user.email, user.password)
            .then((res) => {
                dispatch(setActiveUser(res))
            })
            .catch((err) => console.error(err))
    }

    const handleSignup = () => {
        history.push('/signup');
    }

    const handleGoogle = () => {
        signUpWithGoogle()
            .then((res) => {
                dispatch(setActiveUser(res))
            })
            .catch((err) => console.error(err))
    }

    if (userName) {
        return <Redirect to='/' />
    }

    return (
        <div className="Login">
            <Header />
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <h2 className="Login--title">
                            Woa woa, first tell
                            <br/>
                            us who are you
                        </h2>
                        <input className='InputText' type='email' value={user.email} onChange={(e) => onChangeHandler(e)} name='email' placeholder='email' />
                        <input className='InputText' type='password' value={user.password} onChange={(e) => onChangeHandler(e)} name='password' placeholder='password' />
                        <div className="row">
                            <div className="col-4">
                                <Button type='secondary' message='Sign up' handler={handleSignup} />
                            </div>
                            <div className="col-4">
                                <Button type='primary' message='Sign in!' handler={handleSignin} />
                            </div>
                        </div>
                        <h2 className="Login--subtitle">
                            Or you can use...
                        </h2>
                        <RoundedButton type='google' handler={handleGoogle} img={google} />
                    </div>
                    <div className="col-4">
                        <Carousel />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;
