import React from 'react';
import {Price} from '../Price/price';
import {Works} from '../MyWorks/works';
import {Contacts} from '../Contacts/contacts';


export const Main = () => {
    return(
        <>
            <div>Main</div>
            <Price />
            <Works />
            <Contacts />
        </>
    );
}