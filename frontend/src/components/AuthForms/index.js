import React from 'react';
import PropTypes from 'prop-types';
import IconFb from 'react-ionicons/lib/LogoFacebook'
import styles from './styles.scss';

export const LoginForm = (props, context) => (
    <div className={styles.loginWrap}>
        <form action="#">
            <div className={styles.inputField}>
                <input type="text" name="" id="loginId" placeholder={context.t("Phone number, username, or email")} />
            </div>
            <div className={styles.inputField}>
                <input type="password" name="" id="loginPw" placeholder={context.t("Password")} />
            </div>
            <div className={styles.buttonWrap}>
                <button className={styles.button}>{context.t("Log in")}</button>
            </div>
        </form>
        <div>
            <p className={styles.otherOption}>
                <span className={styles.or}>{context.t("OR")}</span>
            </p>
            <button type="button" className={styles.buttonFb}>
                <IconFb fontSize="20px" color="#385185" className={styles.icon} />
                {context.t("Log in with Facebook")}
            </button>
            <p className={styles.forgot}>{context.t("Forgot Password?")}</p>
        </div>
    </div>
);

LoginForm.contextTypes = {
    t: PropTypes.func.isRequired,
};

export const SignupForm = (props, context) => (
    <div className={styles.signupWrap}>
        <p className={styles.signupText}>
            {context.t("Sign up to see photos and videos from your friends.")}
        </p>
        <button type="button" className={styles.buttonFb2}>
            <IconFb fontSize="20px" color="#fff" className={styles.icon} />
            {context.t("Log in with Facebook")}
        </button>
        <p className={styles.otherOption}>
            <span className={styles.or}>{context.t("OR")}</span>
        </p>
        <form action="#">
            <div className={styles.inputField}>
                <input type="text" name="" id="signupId" placeholder={context.t("Mobile Number, or Email")} />
            </div>
            <div className={styles.inputField}>
                <input type="text" name="" id="signupName" placeholder={context.t("Full Name")} />
            </div>
            <div className={styles.inputField}>
                <input type="text" name="" id="signupNick" placeholder={context.t("Username")} />
            </div>
            <div className={styles.inputField}>
                <input type="password" name="" id="signupPw" placeholder={context.t("Password")} />
            </div>
            <div className={styles.buttonWrap}>
                <button type="button" className={styles.button}>{context.t("Sign Up")}</button>
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

SignupForm.contextTypes = {
    t: PropTypes.func.isRequired,
};