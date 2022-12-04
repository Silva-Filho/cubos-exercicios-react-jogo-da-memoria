import React from "react";

import { 
    describe, 
    expect, 
    it, 
    render, 
    screen, 
    userEvent, 
    vi, 
} from "../../test/index";

import { Sidebar } from "./index";
import { cards } from "../../data/cards";

describe( "component Sidebar", () => {
    it( "should call function setDeck when button Reset is clicked", async () => {
        const sortedCards = cards;
        const setDeck = vi.fn();

        render(
            <Sidebar
                cards={ sortedCards }
                setDeck={ setDeck }
            />
        );

        const buttonReset = screen.getByRole( "button", { name: /reset/i } );
        await userEvent.click( buttonReset );

        expect( setDeck ).toHaveBeenCalledOnce();
        expect( setDeck ).toHaveBeenCalledTimes( 1 );
    } );

    it( "should focus Reset button when tab", async () => {
        const sortedCards = cards;
        const setDeck = vi.fn();

        render(
            <Sidebar
                cards={ sortedCards }
                setDeck={ setDeck }
            />
        );

        const buttonReset = screen.getByRole( "button", { name: /reset/i } );
        await userEvent.tab();

        expect( buttonReset ).toHaveFocus();
    } );

    it( "should call function setDeck when press key Enter on button Reset focused ", async () => {
        const sortedCards = cards;
        const setDeck = vi.fn();

        render(
            <Sidebar
                cards={ sortedCards }
                setDeck={ setDeck }
            />
        );
        
        await userEvent.tab();
        await userEvent.keyboard( "[Enter]" );

        expect( setDeck ).toHaveBeenCalledOnce();
        expect( setDeck ).toHaveBeenCalledTimes( 1 );
    } );
} );
