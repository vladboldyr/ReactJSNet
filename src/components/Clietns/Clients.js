import React, {useState,useEffect} from 'react';
import {ListClients} from "../ListClients/ListClients";
import Modal from "../Modal/Modal";
import './Clients.css';
import data from '../../data.json';

export const Clients = () => {
    const [clients,changeClients] = useState([]);

    useEffect(() => {
        changeClients(parserData);
    },[]);

   const addNewClient = newClient => {
       changeClients([...clients,...newClient]);
   };

   const parserData = () => {
       let dataTable = [...data];
       for (let key in dataTable) {
               dataTable[key].zoneList = dataTable[key].zoneList.join();
       }
       return dataTable;
    };
    return (
        <div>
            <div className="row">
                <form>
                    <div className="row" style={{marginLeft:'20px'}}>
                        <div className="input-field suffix col s2">
                            <i className="material-icons prefix">search</i>
                            <input id="icon_search" type="text" className="validate"/>
                            <label htmlFor="icon_search">Введи имя</label>
                        </div>
                        <Modal countClients={clients.length} addNewClient={addNewClient}/>
                    </div>
                </form>
            </div>
            <ListClients clients={clients}/>
        </div>
    )
}
