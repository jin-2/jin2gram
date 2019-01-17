import React from 'react';
// import Ionicon from 'react-ionicons';
import IconFb from 'react-ionicons/lib/LogoFacebook'
import styles from './styles.scss';

export const LoginForm = props => (
    <div className={styles.loginWrap}>
        <form action="#">
            <div className={styles.inputField}>
                <input type="text" name="" id="loginId" placeholder="Phone number, username, or email" />
            </div>
            <div className={styles.inputField}>
                <input type="password" name="" id="loginPw" placeholder="Password" />
            </div>
            <div className={styles.buttonWrap}>
                <button className={styles.button}>Log in</button>
            </div>
        </form>
        <div>
            <p className={styles.otherOption}>
                <span className={styles.or}>OR</span>
            </p>
            <button type="button" className={styles.buttonFb}>
                <IconFb fontSize="20px" color="#385185" className={styles.icon} />
                Log in with Facebook
            </button>
            <p className={styles.forgot}>Forgot Password?</p>
        </div>
    </div>
);

export const SignupForm = props => (
    <div className={styles.signupWrap}>
        <p className={styles.signupText}>
            Sign up to see photos and videos from your friends.
        </p>
        <button type="button" className={styles.buttonFb2}>
            <IconFb fontSize="20px" color="#fff" className={styles.icon} />
            Log in with Facebook
        </button>
        <p className={styles.otherOption}>
            <span className={styles.or}>OR</span>
        </p>
        <form action="#">
            <div className={styles.inputField}>
                <input type="text" name="" id="signupId" placeholder="Mobile Number, or Email" />
            </div>
            <div className={styles.inputField}>
                <input type="text" name="" id="signupName" placeholder="Full Name" />
            </div>
            <div className={styles.inputField}>
                <input type="text" name="" id="signupNick" placeholder="Username" />
            </div>
            <div className={styles.inputField}>
                <input type="password" name="" id="signupPw" placeholder="Password" />
            </div>
            <div className={styles.buttonWrap}>
                <button type="button" className={styles.button}>Sign Up</button>
            </div>
        </form>
        <p className={styles.agreeText}>
            By signing up, you agree to our
            &nbsp;<strong>Terms</strong>,
            &nbsp;<strong>Data Policy</strong> and
            &nbsp;<strong>Cookies Policy</strong>.
        </p>
    </div>
);