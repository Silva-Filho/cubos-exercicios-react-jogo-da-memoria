import { cleanup, waitFor, waitForElementToBeRemoved } from "@testing-library/react";
import React from "react";

import { describe, expect, it, render, screen, userEvent, vi } from "../../test";

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
