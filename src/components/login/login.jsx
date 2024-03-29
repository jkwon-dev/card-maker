import React from 'react';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './login.module.css';

const Login = ({ authService }) => {
    const history = useHistory();
    const goTomaker = (userId) => {
        history.push({
            pathname: '/maker', 
            state: {id: userId},
        });
    }
    const onLogin = (event) => {
        authService.login(event.currentTarget.textContent)
        .then(data=> goTomaker(data.user.uid)); 
    }; 

    useEffect(() => {
        authService.onAuthChange(user => {
            user && goTomaker(user.uid);
        })
    }); 

    return (
        <section className={styles.login}>
            <Header />
            <section>
                <h1>Login</h1>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <button className={styles.button} onClick={onLogin}>
                            Google
                        </button>
                    </li>
                    <li className={styles.item}>
                        <button className={styles.button} onClick={onLogin}>
                            Github
                        </button>
                    </li>
                </ul>
            </section>
            <Footer />
        </section>
    )
};

export default Login;