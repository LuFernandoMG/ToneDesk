import { useHistory } from 'react-router';
import Carousel from '../components/Carousel';
import Header from '../components/Header';
import Button from '../components/Inputs/Button';
import InputText from '../components/Inputs/InputText';
import RoundedButton from '../components/Inputs/RoundedButton';
import google from '../assets/icons/google.svg';

const Login = () => {

    const history = useHistory();

    const handleSignin = () => {
        console.log('I am sign in');
    }

    const handleSignup = () => {
        history.push('/signup');
    }

    const handleGoogle = () => {
        console.log('Im trying to log through google')
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
                        <InputText type='email' name='email' placeholder='email' />
                        <InputText type='password' name='password' placeholder='password' />
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
                        <RoundedButton type='google' hanlder={handleGoogle} img={google} />
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
