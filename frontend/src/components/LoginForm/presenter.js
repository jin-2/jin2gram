import React from 'react';
import PropTypes from 'prop-types';
import IconFb from 'react-ionicons/lib/LogoFacebook'
import formStyles from '../../shared/formStyles.scss';

const LoginForm = (props, context) => (
    <div className={formStyles.loginWrap}>
        <form action="#">
            <div className={formStyles.inputField}>
                <input type="text" name="" id="loginId" placeholder={context.t("Phone number, username, or email")} />
            </div>
            <div className={formStyles.inputField}>
                <input type="password" name="" id="loginPw" placeholder={context.t("Password")} />
            </div>
            <div className={formStyles.buttonWrap}>
                <button className={formStyles.button}>{context.t("Log in")}</button>
            </div>
        </form>
        <div>
            <p className={formStyles.otherOption}>
                <span className={formStyles.or}>{context.t("OR")}</span>
            </p>
            <button type="button" className={formStyles.buttonFb}>
                <IconFb fontSize="20px" color="#385185" className={formStyles.icon} />
                {context.t("Log in with Facebook")}
            </button>
            <p className={formStyles.forgot}>{context.t("Forgot Password?")}</p>
        </div>
    </div>
);

LoginForm.contextTypes = {
    t: PropTypes.func.isRequired,
};

export default LoginForm;