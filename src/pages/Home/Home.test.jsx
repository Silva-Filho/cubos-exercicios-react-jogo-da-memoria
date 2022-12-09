import React from "react";

import {
    beforeEach,
    describe,
    expect,
    it,
    render,
    screen,
    userEvent,
    waitFor,
    waitForElementToBeRemoved,
} from "../../test";

import { Home } from "./index";

describe( "page Home - layout tests", () => {
    it( "should exist logo in document", () => {
        render( <Home /> );

        expect( screen.getByLabelText( "logo" ) ).toBeInTheDocument();
    } );

    it( "should exist button 'Reset' in document", () => {
        render( <Home /> );

        expect( screen.getByRole( "button", { name: /reset/i } ) ).toBeInTheDocument();
    } );

    it( "should exist two cards 'Heroku' in document", () => {
        render( <Home /> );

        expect( screen.getAllByAltText( /Heroku/i ) ).toHaveLength( 2 );
    } );

    it( "should exist two cards 'HTML & CSS' in document", () => {
        render( <Home /> );

        expect( screen.getAllByAltText( /HTML & CSS/i ) ).toHaveLength( 2 );
    } );

    it( "should exist two cards 'JavaScript' in document", () => {
        render( <Home /> );

        expect( screen.getAllByAltText( /JavaScript/i ) ).toHaveLength( 2 );
    } );

    it( "should exist two cards 'Netlify' in document", () => {
        render( <Home /> );

        expect( screen.getAllByAltText( /netlify/i ) ).toHaveLength( 2 );
    } );

    it( "should exist two cards 'NodeJS' in document", () => {
        render( <Home /> );

        expect( screen.getAllByAltText( /NodeJS/i ) ).toHaveLength( 2 );
    } );

    it( "should exist two cards 'ReactJS' in document", () => {
        render( <Home /> );

        expect( screen.getAllByAltText( /ReactJS/i ) ).toHaveLength( 2 );
    } );
} );

describe( "page Home - functions tests", () => {
    beforeEach( async  () => { 
        render( <Home /> );

        const buttonReset = screen.getByRole( "button", { name: /reset/i } );

        await waitFor( () => userEvent.click( buttonReset ) );
    } );

    it( "should not accept more than two card is turned", async () => {
        const cardHtmlCss = screen.getByTestId( "2" );
        const cardNodeJs = screen.getByTestId( "5" );
        const cardReactJs = screen.getByTestId( "6" );

        await userEvent.click( cardHtmlCss );
        await userEvent.click( cardNodeJs );
        await userEvent.click( cardReactJs );

        expect( cardHtmlCss ).not.toHaveAttribute(
            "src",
            expect.stringMatching( /card-back/i )
        );
        expect( cardNodeJs ).not.toHaveAttribute(
            "src",
            expect.stringMatching( /card-back/i )
        );
        expect( cardReactJs ).toHaveAttribute(
            "src",
            expect.stringMatching( /card-back/i )
        );
    } );

    it( "should do nothing when the same card is clicked twice", async () => {
        const cardHtmlCss = screen.getByTestId( "2" );

        await userEvent.click( cardHtmlCss );
        await userEvent.click( cardHtmlCss );

        expect( cardHtmlCss ).toHaveAttribute(
            "src",
            expect.stringMatching( /card-back/i )
        );
    } );

    it( "should turned off when de two cards are diferents", async () => {
        const cardHtmlCss = screen.getByTestId( "2" );
        const cardNodeJs = screen.getByTestId( "5" );

        await userEvent.click( cardHtmlCss );
        await userEvent.click( cardNodeJs );

        await waitFor( () => {
            expect( cardHtmlCss ).toHaveAttribute(
                "src",
                expect.stringMatching( /card-back/i )
            );
            expect( cardNodeJs ).toHaveAttribute(
                "src",
                expect.stringMatching( /card-back/i )
            );
        } );
    } );

    it( "should remove card '/html & css/i' when founded the pair", async () => {
        const [ cardsHtmlCss01, cardsHtmlCss02 ] = screen.getAllByRole(
            "img",
            {
                name: /html & css/i
            }
        );

        await userEvent.click( cardsHtmlCss01 );
        await userEvent.click( cardsHtmlCss02 );

        await waitFor( () => {
            expect( cardsHtmlCss01 ).not.toBeInTheDocument();
            expect( cardsHtmlCss02 ).not.toBeInTheDocument();
        } );
    } );

    it( "should display 'Congrats' message when the game is finished", async () => {
        const [ cardsHeroku01, cardsHeroku02 ] = screen.getAllByRole(
            "img",
            {
                name: /heroku/i
            }
        );

        await userEvent.click( cardsHeroku01 );
        await userEvent.click( cardsHeroku02 );

        await waitForElementToBeRemoved(
            [
                cardsHeroku01,
                cardsHeroku02
            ]
        );
        expect( cardsHeroku01 ).not.toBeInTheDocument();
        expect( cardsHeroku02 ).not.toBeInTheDocument();

        const [ cardsHtmlCss01, cardsHtmlCss02 ] = screen.getAllByRole(
            "img",
            {
                name: /html & css/i
            }
        );

        await userEvent.click( cardsHtmlCss01 );
        await userEvent.click( cardsHtmlCss02 );

        await waitForElementToBeRemoved(
            [
                cardsHtmlCss01,
                cardsHtmlCss02
            ]
        );
        expect( cardsHtmlCss01 ).not.toBeInTheDocument();
        expect( cardsHtmlCss02 ).not.toBeInTheDocument();

        const [ cardsJavaScript01, cardsJavaScript02 ] = screen.getAllByRole(
            "img",
            {
                name: /javascript/i
            }
        );

        await userEvent.click( cardsJavaScript01 );
        await userEvent.click( cardsJavaScript02 );

        await waitForElementToBeRemoved(
            [
                cardsJavaScript01,
                cardsJavaScript02
            ]
        );
        expect( cardsJavaScript01 ).not.toBeInTheDocument();
        expect( cardsJavaScript02 ).not.toBeInTheDocument();

        const [ cardsNetlify01, cardsNetlify02 ] = screen.getAllByRole(
            "img",
            {
                name: /Netlify/i
            }
        );

        await userEvent.click( cardsNetlify01 );
        await userEvent.click( cardsNetlify02 );

        await waitForElementToBeRemoved(
            [
                cardsNetlify01,
                cardsNetlify02
            ]
        );
        expect( cardsNetlify01 ).not.toBeInTheDocument();
        expect( cardsNetlify02 ).not.toBeInTheDocument();

        const [ cardsNodeJS01, cardsNodeJS02 ] = screen.getAllByRole(
            "img",
            {
                name: /NodeJS/i
            }
        );

        await userEvent.click( cardsNodeJS01 );
        await userEvent.click( cardsNodeJS02 );

        await waitForElementToBeRemoved(
            [
                cardsNodeJS01,
                cardsNodeJS02
            ]
        );
        expect( cardsNodeJS01 ).not.toBeInTheDocument();
        expect( cardsNodeJS02 ).not.toBeInTheDocument();

        const [ cardsReactJS01, cardsReactJS02 ] = screen.getAllByRole(
            "img",
            {
                name: /ReactJS/i
            }
        );

        await userEvent.click( cardsReactJS01 );
        await userEvent.click( cardsReactJS02 );

        await waitForElementToBeRemoved(
            [
                cardsReactJS01,
                cardsReactJS02
            ]
        );
        expect( cardsReactJS01 ).not.toBeInTheDocument();
        expect( cardsReactJS02 ).not.toBeInTheDocument();

        const congratsImg = await screen.findByLabelText( /congrats/i );

        expect( congratsImg ).toBeInTheDocument();
    }, 7000 );
} );
