import { render } from '@testing-library/react';
import { Header } from '.';

test ('render header', ()=>{
    const{ getByTestId } = render (<Header/>)
    const logo = getByTestId('logo');

    expect(logo).toBeInTheDocument();
})