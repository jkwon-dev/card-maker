import React from 'react';
import CardAddFrom from '../card_add_form/card_add_form';
import CardEditForm from '../card_edit_form/card_edit_form';
import styles from './editor.module.css';

const Editor = ({ FileInput, cards, addCard, updateCard, deleteCard }) => (
           <section className={styles.editor}>
             <h1 className={styles.title}>Card Maker</h1>
             {Object.keys(cards).map((key)=> (
              <CardEditForm 
                key={key} 
                FileInput={FileInput}
                card={cards[key]} 
                updateCard={updateCard} 
                deleteCard={deleteCard}/>
              ))}
              <CardAddFrom FileInput={FileInput} onAdd={addCard}/>
           </section>
    );

export default Editor;