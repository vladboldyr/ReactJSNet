import React, {Component,Fragment, useState,useEffect} from 'react';
import DatePicker from "react-datepicker/dist/react-datepicker.min";
import  "react-datepicker/dist/react-datepicker-cssmodules.min.css"
import  "react-datepicker/dist/react-datepicker.min.css";
import M from "materialize-css";
import "./Modal.css";
import ru from "date-fns/locale/ru"
import {registerLocale} from "react-datepicker";

registerLocale("ru", ru);

class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate : new Date()
        }
        this.setStartDate = this.setStartDate.bind(this);
    };

  setStartDate(date) {
   this.setState({startDate : date});
  };

  componentDidMount() {
    const options = {
       onOpenStart: () => {
         console.log("Open Start");
       },
       onOpenEnd: () => {
         console.log("Open End");
       },
       onCloseStart: () => {
         console.log("Close Start");
       },
       onCloseEnd: () => {
         console.log("Close End");
       },
       inDuration: 250,
       outDuration: 250,
       opacity: 0.5,
       dismissible: false,
       startingTop: "4%",
       endingTop: "10%"
     };
     M.Modal.init(this.Modal, options);
     console.log("call modal");
  }
  render() {
    return (
        <Fragment>
          <button data-target="modalAddClient" type="button" className="btn-floating btn-small waves-effect waves-light modal-trigger buttonPlus"><i className="material-icons">add</i></button>
          <div  ref={Modal => {this.Modal = Modal;}} id="modalAddClient" className="modal customModal">
            <div className="modal-content">
              <div className="row">
                <form className="col s12">
                  <div className="row">
                    <div className="input-field col s4">
                      <i className="material-icons prefix">account_circle</i>
                      <input id="icon_prefix" type="text" className="validate"/>
                      <label htmlFor="icon_prefix">Введите Имя</label>
                    </div>
                    <div className="input-field col s4">
                      <i className="material-icons prefix">phone</i>
                      <input id="icon_telephone" type="number" className="validate"/>
                      <label htmlFor="icon_telephone">Телефон</label>
                    </div>
                    <div className="input-field col s4">
                        <DatePicker
                            dateFormat="dd/MM/yyyy"
                            selected={this.state.startDate}
                            onChange={date => this.setStartDate(date)}RT45Y
                            locale='ru'
                        />
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="modal-footer customModalFooter">
              <a href="#!" onClick={()=> console.log("Save")} className="modal-close waves-effect waves-green btn-flat">Сохранить</a>
              <a href="#!" onClick={()=> console.log("Cancel")}className="modal-close waves-effect waves-green btn-flat">Отмена</a>
            </div>
          </div>
        </Fragment>
    );
}
}
export default Modal;
