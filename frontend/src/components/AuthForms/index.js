import React from 'react';
// import Ionicon from 'react-ionicons';
import IconFb from 'react-ionicons/lib/LogoFacebook'
import styles from './styles.scss';

export const LoginForm = props => (
    <div>
        <form action="#">
            <div>
                <input type="text" name="" id="loginId" placeholder="Phone number, username, or email" />
            </div>
            <div>
                <input type="password" name="" id="loginPw" placeholder="Password" />
            </div>
            <div>
                <button>Log in</button>
            </div>
        </form>
        <div>
            <p>or</p>
            <button type="button">
                <IconFb fontSize="20px" color="#fff" />
                Log in with Facebook
            </button>
            <p>Forgot Password?</p>
        </div>
    </div>
);

export const SignupForm = props => (
    <div>
        <p>
            Sign up to see photos and videos from your friends.
        </p>
        <button type="button">
            <IconFb fontSize="20px" color="#385185" />
            Log in with Facebook
        </button>
        <p>OR</p>
        <form action="#">
            <div>
                <input type="text" name="" id="signupId" placeholder="Mobile Number, or Email" />
            </div>
            <div>
                <input type="text" name="" id="signupName" placeholder="Full Name" />
            </div>
            <div>
                <input type="text" name="" id="signupNick" placeholder="Username" />
            </div>
            <div>
                <input type="password" name="" id="signupPw" placeholder="Password" />
            </div>
            <div>
                <button type="button">Sign Up</button>
            </div>
        </form>
        <p>
            By signing up, you agree to our
            <strong>Terms</strong>,
            <strong>Data Policy</strong> and
            <strong>Cookies Policy</strong>.
        </p>
    </div>
);