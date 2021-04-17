import { useState } from 'react';
import { Redirect, useHistory } from 'react-router';
import { signInMail, signUpWithGoogle } from '../backend/firebaseMethods';
import { selectorUserName, setActiveUser } from '../backend/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import right from '../assets/img/image__right.png';
import Header from '../components/Header';
import Button from '../components/Inputs/Button';
import RoundedButton from '../components/Inputs/RoundedButton';
import google from '../assets/icons/google.svg';
import Footer from '../components/Footer';
import '../assets/styles/containers/Auth.scss';

const Login = (props) => {

    const history = useHistory();
    const dispatch = useDispatch();
    const userName = useSelector(selectorUserName);
    const [user, setUser] = useState({
        email: '',
        password: '',
    })

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
    }

    if (userName) {
        return <Redirect to='/' />
    }

    return (
        <>
            <Header />
            <div className="Login">
                <div className="container">
                    <div className="row">
                        <div className="col-4 login">
                            <h2 className="Login--title">
                                Woa woa, first tell
                            <br />
                            us who you are
                        </h2>
                            <input className='InputText' type='email' value={user.email} onChange={(e) => onChangeHandler(e)} name='email' placeholder='email' />
                            <input className='InputText' type='password' value={user.password} onChange={(e) => onChangeHandler(e)} name='password' placeholder='password' />
                            <div className="row">
                                <div className="col-4 button-auth">
                                    <Button type='secondary' message='Sign up' handler={handleSignup} />
                                </div>
                                <div className="col-4 button-auth">
                                    <Button type='primary' message='Sign in!' handler={handleSignin} />
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

export default Login;
