import React from 'react';
import styles from './styles.scss';

const Auth = (props, context) => (
    <main className={styles.pageIntro}>
        <div className={styles.visual}>
            <img src={require("images/phone.jpg")} alt="" />
        </div>
        <div className={styles.contents}>
            <div className={styles.form}>
                Hello
            </div>
            <div className={styles.box}>
                {(() => {
                    switch (props.action) {
                        case 'login':
                            return (
                                <p>
                                    Don't have an account?{' '}
                                    <span className={styles.linkText} onClick={props.changeAction}>Sign up</span>
                                </p>
                            );
                        case 'signup':
                            return (
                                <p>
                                    Have an account?{' '}
                                    <span className={styles.linkText} onClick={props.changeAction}>Log in</span>
                                </p>
                            );
                        default:
                            break;
                    }
                })()}
            </div>
            <p className={styles.smallTitle}>Get the App</p>
            <div className={styles.storeLinks}>
                <p className={styles.store}>
                    <img src={require("images/app-store.png")} alt="Download on the App Store" />
                </p>
                <p className={styles.store}>
                    <img src={require("images/google-store.png")} alt="Get it on Google Play" />
                </p>
            </div>
        </div>
    </main>
);

export default Auth;