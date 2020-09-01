import React, {Fragment} from 'react';
import {ListClients} from "./ListClients";
import './Clients.css';

export const Clients = () => {
    const clients = new Array(3)
        .fill('')
        .map((_,i)=>({id:i, Name: `Name ${i + 1}`}))

    return (
        <div>
            <div className="row">
                <form className="col s12">
                    <div className="row" style={{marginLeft:'20px'}}>
                        <div className="input-field col s4">
                            <i className="material-icons search">search</i>
                            <input id="icon_search" type="text" className="validate"/>
                            <label htmlFor="icon_search">Enter Name</label>
                        </div>
                    </div>
                </form>
            </div>
            <ListClients clients={clients}/>
        </div>
    )
}