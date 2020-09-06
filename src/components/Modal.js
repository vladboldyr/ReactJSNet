import React, {Component,Fragment, useState,useEffect} from 'react';
import DatePicker from "react-datepicker/dist/react-datepicker.min";
import  "react-datepicker/dist/react-datepicker-cssmodules.min.css"
import  "react-datepicker/dist/react-datepicker.min.css";
import M, { Dropdown } from "materialize-css";
import "./Modal.css";
import ru from "date-fns/locale/ru"
import setMinutes from "date-fns/setMinutes";
import setHours from "date-fns/setHours";
import {registerLocale} from "react-datepicker";

registerLocale("ru", ru);

class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dateFormat : "dd/MM/yyyy hh:mm",
            timeIntervals: 15,
            startDate : new Date(),
            selectedZone: "Выберите зону",
            zoneList : ["Подмыхи","Руки","Ноги"],
            depilationMethods: ["Шугаринг","Воск"],
            nameClient: "",
            numberPhon: "",
            zoneSelected: [],
            instanceFormSelect : null
        }
        this.setStartDate = this.setStartDate.bind(this);
        this.generationExcludeTimes = this.generationExcludeTimes.bind(this);
    };

  setStartDate(date) {
   this.setState({startDate : date});
  }

  generationExcludeTimes(times) {
      return times.map(time => {
          return setHours(setMinutes(new Date(), time.minutes), time.hour);
      });
  }

  closeModalSave() {
    console.log("Save");
    const values = this.state.instanceFormSelect.getSelectedValues();
    this.setState((state) => {
      return {zoneSelected : state.zoneSelected.concat(values)}
    });
  }

  onChangeName(e) {
    this.setState({nameClient : e.target.value});
  }

  onChangePhone(e) {
    this.setState({numberPhon : e.target.value});
  }

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
         console.group(this.state.zoneSelected,this.state.nameClient,this.state.numberPhon,this.state.startDate);
       },
       inDuration: 250,
       outDuration: 250,
       opacity: 0.5,
       dismissible: false,
       startingTop: "4%",
       endingTop: "10%"
     };
     
     M.FormSelect.init(this.Select,{});
     M.Modal.init(this.Modal, options);
     this.setState({instanceFormSelect:M.FormSelect.getInstance(this.Select)});

  }
  render() {
    return (
        <Fragment>
          <button data-target="modalAddClient" type="button" className="btn-floating btn-small waves-effect waves-light modal-trigger buttonPlus"><i className="material-icons">add</i></button>
          <div ref={Modal => {this.Modal = Modal;}} id="modalAddClient" className="modal customModal">
            <div className="modal-content">
              <div className="row">
                <div className="col s12">
                  <div className="row">
                    <div className="input-field col s4">
                      <i className="material-icons prefix">account_circle</i>
                      <input id="icon_prefix" type="text" className="validate" onChange={e => this.onChangeName(e)}/>
                      <label htmlFor="icon_prefix">Введите Имя</label>
                    </div>
                    <div className="input-field col s4">
                      <i className="material-icons prefix">phone</i>
                      <input id="icon_telephone" type="number" className="validate" onChange={e => this.onChangePhone(e)}/>
                      <label htmlFor="icon_telephone">Телефон</label>
                    </div>
                    <div className="input-field col s4">
                        <DatePicker
                            locale='ru'
                            dateFormat={this.state.dateFormat}
                            timeIntervals={this.state.timeIntervals}
                            showTimeSelect
                            selected={this.state.startDate}
                            onChange={date => this.setStartDate(date)}
                            excludeTimes={this.generationExcludeTimes(
                                [{"minutes":30,"hour":15},{"minutes":30,"hour":16}]
                              )
                            }
                        />
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s4">
                      <select ref={Select => {this.Select = Select;}} multiple>
                          <option value="" disabled >Выберите зону</option>
                        {
                            this.state.zoneList.map((zone,index) => (
                              <option key={index} value={zone}>{zone}</option>
                            ))}
                      </select>
                    </div>
                    <div className="col s4">
                    <p>
                    <label>
                      <input name="group1" type="radio" checked />
                      <span>Red</span>
                    </label>
                  </p>
                  <p>
                    <label>
                      <input name="group1" type="radio" />
                      <span>Yellow</span>
                    </label>
                  </p>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer customModalFooter">
              <a href="#!" onClick={()=> this.closeModalSave()} className="modal-close waves-effect waves-green btn-flat">Сохранить</a>
              <a href="#!" onClick={()=> console.log("Cancel")} className="modal-close waves-effect waves-green btn-flat">Отмена</a>
            </div>
          </div>
        </Fragment>
    );
}
}
export default Modal;
