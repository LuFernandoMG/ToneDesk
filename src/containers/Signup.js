import { useHistory } from 'react-router';
import Carousel from '../components/Carousel';
import Header from '../components/Header';
import Button from '../components/Inputs/Button';
import InputText from '../components/Inputs/InputText';
import RoundedButton from '../components/Inputs/RoundedButton';
import google from '../assets/icons/google.svg';

const Signup = () => {

    const history = useHistory();

    const handleSignin = () => {
        history.push('/login');
    }

    const handleSignup = () => {
        console.log('Im sign up');
    }

    const handleGoogle = () => {
        console.log('Im trying to log through google')
    }

    return (
        <div className="Signup">
            <Header />
            <div className="container">
                <div className="row">
                    <div className="col-4 signup">
                        <h2 className="Login--title">
                            Ohh, first time here?
                            <br/>
                            Well, let's do this fast
                        </h2>
                        <InputText type='name' name='name' placeholder='name' />
                        <InputText type='email' name='email' placeholder='email' />
                        <InputText type='password' name='password' placeholder='password' />
                        <div className="row">
                            <div className="col-4">
                                <Button type='secondary' message="Hey, I've account" handler={handleSignin} />
                            </div>
                            <div className="col-4">
                                <Button type='primary' message='Sign up!' handler={handleSignup} />
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

export default Signup;
