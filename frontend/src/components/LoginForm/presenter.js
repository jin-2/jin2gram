import React from "react";
import PropTypes from "prop-types";
import FacebookLogin from "react-facebook-login";
import formStyles from "../../shared/formStyles.scss";

const LoginForm = (props, context) => (
  <div className={formStyles.loginWrap}>
    <form onSubmit={props.handleSubmit}>
      <div className={formStyles.inputField}>
        <input
          type="text"
          name=""
          id="loginId"
          placeholder={context.t("Phone number, username, or email")}
          value={props.usernameValue}
          name="username"
          onChange={props.handleInputChange}
        />
      </div>
      <div className={formStyles.inputField}>
        <input
          type="password"
          name=""
          id="loginPw"
          placeholder={context.t("Password")}
          name="password"
          value={props.passwordValue}
          onChange={props.handleInputChange}
        />
      </div>
      <div className={formStyles.buttonWrap}>
        <button className={formStyles.button}>{context.t("Log in")}</button>
      </div>
    </form>
    <div>
      <p className={formStyles.otherOption}>
        <span className={formStyles.or}>{context.t("OR")}</span>
      </p>
      <FacebookLogin
        appId="2228520780713829"
        autoLoad={true}
        fields="name,email,picture"
        callback={props.handleFbLogin}
        cssClass={formStyles.buttonFb}
        icon="fa-facebook-square"
      />
      <p className={formStyles.forgot}>{context.t("Forgot Password?")}</p>
    </div>
  </div>
);

LoginForm.propTypes = {
  usernameValue: PropTypes.string.isRequired,
  passwordValue: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleFbLogin: PropTypes.func.isRequired
};

LoginForm.contextTypes = {
  t: PropTypes.func.isRequired
};

export default LoginForm;
