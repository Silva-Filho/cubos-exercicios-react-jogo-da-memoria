import React from "react";

// @ts-ignore
import CardBack from "../../assets/card-back.png";
// @ts-ignore
import styles from "./Card.module.css";

export function Card( { card, deck, setDeck } ) {
    function handleTurnCard() {
        const localDeck = [ ...deck ];

        const currentCard = localDeck.find( item => item.id === card.id );
        const onlyTurnedCards = localDeck.filter( item => item.turned === true );

        if ( onlyTurnedCards.length > 1 ) {
            return;
        }

        if ( onlyTurnedCards.length > 0 && card.name === onlyTurnedCards[ 0 ].name ) {
            currentCard.turned = !currentCard.turned;

            setDeck( [ ...localDeck ] );

            setTimeout( () => {
                if ( currentCard.id === onlyTurnedCards[ 0 ].id ) {
                    return;
                }

                const filteredCards = localDeck.filter( item => {
                    return item.id !== currentCard.id && item.id !== onlyTurnedCards[ 0 ].id;
                } );

                setDeck( [ ...filteredCards ] );
            }, 1000 );

            return;
        }

        currentCard.turned = !currentCard.turned;

        setDeck( [ ...localDeck ] );

        if ( onlyTurnedCards.length > 0 ) {
            setTimeout( () => {
                localDeck.forEach( item => item.turned = false );

                setDeck( [ ...localDeck ] );
            }, 1000 );
        }
    }

    return (
        <>
            <img
                data-testid={ card.id }
                className={ styles.card }
                src={ card.turned ? card.image : CardBack }
                alt={ card.name }
                onClick={ () => handleTurnCard() }
            />
        </>
    );
}
