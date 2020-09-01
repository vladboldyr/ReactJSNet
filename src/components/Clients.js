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
                <form>
                    <div className="row" style={{marginLeft:'20px'}}>
                        <div className="input-field  suffix col s6">
                            <i className="material-icons">search</i>
                            <input id="icon_search" type="text" className="validate"/>
                            <label form="icon_search">Enter Name</label>
                        </div>
                    </div>
                </form>
            </div>
            <ListClients clients={clients}/>
        </div>
    )
}