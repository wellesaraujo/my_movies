import { render, screen, fireEvent } from '@testing-library/react';
import Home  from '.';
import React from 'react';
import Details from '../details';

describe ("Testing Home Page", () =>{


    it ("Render Input Field", () =>{

        render(<Home/>);
        const inputField = screen.getByTestId("input-search");
        expect(inputField).toBeInTheDocument;

    });

    it ("Render Search Button", () =>{
        
        render(<Home/>);
        const searchButton = screen.getByTestId("request-search");
        expect(searchButton).toBeInTheDocument;
    });

    it("Click on show image",()=>{

        render(<Home/>);
        const showPoster = screen.getByTestId("2142"); //Nao encontra objeto pelo TestId
        fireEvent.click(showPoster);

        expect(<Details/>).toBeCalled; // Expected ta certo?


    });


}

);

