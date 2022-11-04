import React from "react";

// @ts-ignore
import styles from "./Sidebar.module.css";
// @ts-ignore
import Logo from "../../assets/logo.svg";

export function Sidebar( { cards, setDeck } ) {
    function handleReset() {
        cards.forEach( card => {
            card.turned = false;
        } );

        const sortedCards = cards.sort( () => Math.random() * -0.5 );

        // setDeck( [ ...cards ] );
        setDeck( [ ...sortedCards ] );
    }

    return (
        <div className={ styles[ "container" ] } >
            <img src={ Logo } alt="" />

            <button onClick={ () => handleReset() }>
                Reset
            </button>
        </div>
    );
}
