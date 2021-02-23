import { fireEvent, render } from '@testing-library/react';
import { Header } from '.';

test ('render header', ()=>{
    const{ getByTestId } = render (<Header/>)
    const logo = getByTestId('logo');

    expect(logo).toBeInTheDocument();
})

// test ('logoClick', () =>{
//     const functionOnClick = jest.fn();
//     const {getByTestId} = render (<Header/>); // como definir o onClick()=> jest.fn() no logo quando renderiza a Header ?
//     const logoButton = getByTestId('logo');
//     fireEvent.click(logoButton);
//     expect(functionOnClick).toBeCalled();

// })