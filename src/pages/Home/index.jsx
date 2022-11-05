import React, { useState } from "react";

import { Card } from "../../components/Card";
import { Sidebar } from "../../components/Sidebar";

import { cards } from "../../data/cards";
// @ts-ignore
import Congrats from "../../assets/congrats.png";
// @ts-ignore
import styles from "./Home.module.css";

const sortedCards = cards.sort( () => Math.random() * -0.5 );

export function Home() {
    const [ deck, setDeck ] = useState( [ ...sortedCards ] );

    return (
        <div className={ styles.container } >
            <Sidebar
                cards={ sortedCards }
                setDeck={ setDeck }
            />

            <main>
                <div className={ styles.deck } >
                    { deck.length > 0 ?
                        deck.map( card => (
                            <Card
                                key={ card.id }
                                card={ card }
                                deck={ deck }
                                setDeck={ setDeck }
                            />
                        ) ) 
                        :
                        <img src={ Congrats } alt="Imagem de congratulação por ter terminado o jogo." />
                    }
                </div>
            </main>
        </div>
    );
}
