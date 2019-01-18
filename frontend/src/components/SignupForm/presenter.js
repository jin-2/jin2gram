import React from 'react';
import PropTypes from 'prop-types';
import IconFb from 'react-ionicons/lib/LogoFacebook';
import formStyles from '../../shared/formStyles.scss';

const SignupForm = (props, context) => (
    <div className={formStyles.signupWrap}>
        <p className={formStyles.signupText}>
            {context.t("Sign up to see photos and videos from your friends.")}
        </p>
        <button type="button" className={formStyles.buttonFb2}>
            <IconFb fontSize="20px" color="#fff" className={formStyles.icon} />
            {context.t("Log in with Facebook")}
        </button>
        <p className={formStyles.otherOption}>
            <span className={formStyles.or}>{context.t("OR")}</span>
        </p>
        <form onSubmit={props.handleSubmit}>
            <div className={formStyles.inputField}>
                <input type="text" name="" id="signupId" placeholder={context.t("Mobile Number, or Email")} value={props.emailValue} name="email" onChange={props.handleInputChange} />
            </div>
            <div className={formStyles.inputField}>
                <input type="text" name="" id="signupName" placeholder={context.t("Full Name")} value={props.fullnameValue} name="fullname" onChange={props.handleInputChange} />
            </div>
            <div className={formStyles.inputField}>
                <input type="text" name="" id="signupNick" placeholder={context.t("Username")} value={props.usernameValue} name="username" onChange={props.handleInputChange} />
            </div>
            <div className={formStyles.inputField}>
                <input type="password" name="" id="signupPw" placeholder={context.t("Password")} value={props.passwordValue} name="password" onChange={props.handleInputChange} />
            </div>
            <div className={formStyles.buttonWrap}>
                <button className={formStyles.button}>{context.t("Sign Up")}</button>
            </div>
        </form>
        <p className={formStyles.agreeText}>
            By signing up, you agree to our
            &nbsp;<strong>Terms</strong>,
            &nbsp;<strong>Data Policy</strong> and
            &nbsp;<strong>Cookies Policy</strong>.
        </p>
    </div>
);

SignupForm.propTypes = {
    emailValue: PropTypes.string.isRequired,
    fullnameValue: PropTypes.string.isRequired,
    usernameValue: PropTypes.string.isRequired,
    passwordValue: PropTypes.string.isRequired,
    handleInputChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
};

SignupForm.contextTypes = {
    t: PropTypes.func.isRequired,
};

export default SignupForm;