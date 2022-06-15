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
    const [cards, setCards] = useState({
        '1': {
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
        '2': {
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
        '3':{
            id: '3',
            name: 'KoKo', 
            company: 'ABC', 
            theme: 'colorful',
            title: 'artist', 
            email: 'koko@gmail.com', 
            message: 'coffee, coffee, coffee',
            fileName: 'koko', 
            fileURL: null,
        },
    });

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

    const createOrupdateCard = (card) => {
        setCards(cards => {
            const updated = {...cards};
            updated[card.id] = card; 
            return updated; 
        }); 
    };

    const deleteCard = (card) => {
        setCards(cards => {
            const updated = {...cards};
            delete updated[card.id]; 
            return updated; 
        }); 
    };

    return(
        <section className={styles.maker}>
            <Header onLogout={onLogout}/>
            <div className={styles.container}>
                <Editor cards={cards} addCard={createOrupdateCard} updateCard={createOrupdateCard} deleteCard={deleteCard}/>
                <Preview cards={cards}/>
            </div>
            <Footer />
        </section>
    )
};

export default Maker;