import React from "react";

import {
    afterEach,
    describe,
    expect,
    it,
    render,
    screen,
    userEvent,
    vi,
} from "../../test";

import { Sidebar } from "./index";
import { cards } from "../../data/cards";

const setDeck = vi.fn();

function customRender() {
    const sortedCards = cards;
    /* const setDeck = vi.fn(); */

    render(
        <Sidebar
            cards={ sortedCards }
            setDeck={ setDeck }
        />
    );
}

describe( "component Sidebar", () => {
    afterEach( () => {
        vi.clearAllMocks();
    } );

    it( "should call function setDeck when button Reset is clicked", async () => {
        customRender();

        const user = userEvent.setup();

        const buttonReset = screen.getByRole( "button", { name: /reset/i } );
        await user.click( buttonReset );

        expect( setDeck ).toHaveBeenCalledOnce();
        expect( setDeck ).toHaveBeenCalledTimes( 1 );
    } );

    it( "should focus Reset button when tab", async () => {
        customRender();

        const user = userEvent.setup();

        const buttonReset = screen.getByRole( "button", { name: /reset/i } );
        await user.tab();

        expect( buttonReset ).toHaveFocus();
    } );

    it( "should call function setDeck when press key Enter on button Reset focused ", async () => {
        customRender();

        const user = userEvent.setup();

        await user.tab();
        await user.keyboard( "[Enter]" );

        expect( setDeck ).toHaveBeenCalledOnce();
        expect( setDeck ).toHaveBeenCalledTimes( 1 );
    } );
} );
