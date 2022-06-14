import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css'; 

const Maker = ({authService}) => {
    const [cards, setCards] = useState([
        {
        id: '1',
        name: 'Ellie', 
        company: 'Samung', 
        theme: 'dark',
        title: 'Software Engineer', 
        email: 'ellie@gmail.com', 
        message: 'go for it',
        fileName: 'ellie', 
        fileURL: 'ellie.png'
        },
        {
            id: '2',
            name: 'green', 
            company: 'Eco', 
            theme: 'light',
            title: 'Marketer', 
            email: 'green@gmail.com', 
            message: 'love you',
            fileName: 'green', 
            fileURL: null,
        },
        {
            id: '3',
            name: 'KoKo', 
            company: 'ABC', 
            theme: 'colorful',
            title: 'artist', 
            email: 'koko@gmail.com', 
            message: 'coffee, coffee, coffee',
            fileName: 'koko', 
            fileURL: null,
        }
    ]);
    const history = useHistory();
    const onLogout = () => {
        authService.logout(); 
    }; 

    useEffect(() => {
        authService.onAuthChange(user => {
            if(!user) {
                history.push('/');
            }
        });
    });

    return(
        <section className={styles.maker}>
            <Header onLogout={onLogout}/>
            <div className={styles.container}>
                <Editor cards={cards}/>
                <Preview cards={cards}/>
            </div>
            <Footer />
        </section>
    )
};

export default Maker;