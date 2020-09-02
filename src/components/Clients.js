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
                        <div className="input-field  suffix col s2">
                            <i className="material-icons">search</i>
                            <input id="icon_search" type="text" className="validate"/>
                            <label htmlFor="icon_search">Enter Name</label>
                        </div>
                        <a className="btn-floating btn-small waves-effect waves-light buttonPlus" style={{marginTop:"13px"}}><i className="material-icons">add</i></a>
                    </div>
                </form>
            </div>
            <ListClients clients={clients}/>
        </div>
    )
}
