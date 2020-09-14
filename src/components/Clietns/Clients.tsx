import React, {useState,useEffect} from 'react';
import {ListClients} from "../ListClients/ListClients";
import Modal from "../Modal/Modal";
import './Clients.css';
import data from '../../data.json';

interface Data {
    id:number,
    name:string,
    phone:string,
    Date:string,
    zoneList:string[],
    depilation:string,
    text:string
}


export const Clients = () => {
    const [clients,changeClients] = useState([]);
    const [filterText,setFilterText] = useState('');
    const filteredItems = clients.filter(item => item.name && item.name.toLowerCase().includes(filterText.toLowerCase()));

    
    useEffect(() => {
        //changeClients(parserData);
    },[]);


   const addNewClient = newClient => {
       changeClients([...clients,...newClient]);
   };

   
  /*  const parserData = () => {
       let dataTable: Data[] = [...data];
       for (let key in dataTable) {
               dataTable[key].zoneList = dataTable[key].zoneList.join();
       }
       return dataTable;
    }; */
    return (
        <div>
            <div className="row">
                <form>
                    <div className="row" style={{marginLeft:'20px'}}>
                        <div>
                            <div className="input-field suffix col s2">
                                <i className="material-icons prefix">search</i>
                                <input id="icon_search" type="text"  className="validate" value={filterText} onChange={(e) => setFilterText(e.target.value)}/>
                                <label htmlFor="icon_search">Введи имя</label>
                            </div>
                            <div className="col s1">
                                <button className="buttonClear shiftButtonClear" type="button" name="clear" onClick={()=>setFilterText('')}>
                                    <i className="small material-icons center">clear</i>
                                </button>
                            </div>
                        </div>
                        <div className="col s2 offset-s7">
                            <div style={{display:"inline-block"}}>
                              <p style={{display:"inline-block"}}>Записать клиента</p>
                              <button data-target="modalAddClient" type="button"
                                      className="btn-floating btn-small waves-effect waves-light modal-trigger pulse buttonPlus"
                                      style={{display:"inline-block",marginBottom:"1rem"}}>
                                  <i className="material-icons">add</i></button>
                            </div>
                            <Modal countClients={clients.length} addNewClient={addNewClient}/>
                        </div>
                    </div>
                </form>
            </div>
            <ListClients clients={filteredItems}/>
        </div>
    )
}