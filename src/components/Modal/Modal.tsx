import React, {Component,Fragment, useState,useEffect, createRef} from 'react';
import DatePicker from "react-datepicker/dist/react-datepicker.min";
import  "react-datepicker/dist/react-datepicker-cssmodules.min.css"
import  "react-datepicker/dist/react-datepicker.min.css";
import M, { Dropdown } from "materialize-css";
import "./modal.css";
import ru from "date-fns/locale/ru"
import setMinutes from "date-fns/setMinutes";
import setHours from "date-fns/setHours";
import {registerLocale} from "react-datepicker";
//import ReactDOM from 'react-dom';

registerLocale("ru", ru);

const textArea = "Напишите комментарий";

type ClientProps = {
  countClients: number,
  addNewClient: (newClient: any) => void;
}

type ModalState = {
  dateFormat : string,
  timeIntervals: number,
  selectedDate: Date,
  zoneList : string[],
  depilationMethods: string[],
  selectedOptionDepilation: string,
  text: string,
  nameClient: string
  numberPhone: string,
  zoneSelected: string[],
  instanceFormSelect : any|HTMLElement,
  isSave:boolean,
}

class Modal extends Component<ClientProps, ModalState> {
  private ModalRef = createRef<HTMLDivElement>();
  private SelectRef = createRef<HTMLSelectElement>();
    
  state = {
    dateFormat : "dd/MM/yyyy hh:mm",
    timeIntervals: 15,
    selectedDate: new Date(),
    zoneList : ["Подмыхи","Руки","Ноги"],
    depilationMethods: ["Шугаринг","Воск"],
    selectedOptionDepilation: "",
    text: "",
    nameClient: "",
    numberPhone: "",
    zoneSelected: [],
    instanceFormSelect : null,
    isSave:false,
  };

  setSelectedDate = (date) => {
    this.setState({selectedDate : date});
  }

  getModalRef = (node) => {
    this.ModalRef = node;
  }

   getSelectRef = (node) => {
    this.SelectRef = node;
  }  

  generationExcludeTimes = (times) => {
      return times.map(time => {
          return setHours(setMinutes(new Date(), time.minutes), time.hour);
      });
  }

  closeModalSave() {
    const values = this.state.instanceFormSelect.getSelectedValues();

    this.setState((state) => {
      return {
          zoneSelected : state.zoneSelected.concat(values),
          nameClient : state.nameClient,
          numberPhone : state.numberPhone,
          text : state.text,
          selectedOptionDepilation: state.selectedOptionDepilation,
          selectedDate: state.selectedDate,
          isSave:true
      }
    });
  }

  onChangeName(e) {
    this.setState({nameClient : e.target.value});
  }

  onChangePhone(e) {
    this.setState({numberPhone : e.target.value});
  }

  onChangeText(e) {
    this.setState({text : e.target.value});
  }

  onValueChangeDepilation(e){
   this.setState({selectedOptionDepilation: e.target.value});
  }

  clearFields() {
    //TO Do до конца селект не сбрасывается
      this.state.instanceFormSelect.input.value = '';
      this.setState((state) => {
          return {
              zoneSelected : [],
              nameClient : "",
              numberPhone : "",
              text : "",
              selectedOptionDepilation: state.depilationMethods[0],
              selectedDate: new Date(),
              isSave:false
          }
      });
  };
 /*  componentDidUpdate(prevProps,prevState) {
    if (this.state.instanceFormSelect === prevState.instanceFormSelect) {
     
    }
  } */

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
         console.group(this.state.zoneSelected, this.state.nameClient, this.state.numberPhone, this.state.selectedDate, this.state.text, this.state.selectedOptionDepilation);
         const newClient = [{"id":this.props.countClients + 1,"name":this.state.nameClient,"phone":this.state.numberPhone,"Date":this.state.selectedDate.toString(),"depilation":this.state.selectedOptionDepilation,"zoneList":this.state.zoneSelected,"text":this.state.text}];
          if (this.state.isSave) {
              this.props.addNewClient(newClient);
              this.clearFields();
          }
       },
       inDuration: 250,
       outDuration: 250,
       opacity: 0.5,
       dismissible: false,
       startingTop: "4%",
       endingTop: "10%"
     };
      
     
     M.FormSelect.init(this.SelectRef,{});
     M.Modal.init(this.ModalRef, options);
     this.setState({selectedOptionDepilation: this.state.depilationMethods[0]});
     this.setState({instanceFormSelect:M.FormSelect.getInstance(this.SelectRef)});

  }
  render() {
      return (
            <div ref={this.getModalRef} id="modalAddClient" className="modal customModal">
              <div className="modal-content">
                <div className="row">
                  <div className="col s12">
                    <div className="row">
                      <div className="input-field col s4">
                        <i className="material-icons prefix">account_circle</i>
                        <input id="icon_prefix" type="text" className="validate" value={this.state.nameClient} onChange={e => this.onChangeName(e)}/>
                        <label htmlFor="icon_prefix">Введите Имя</label>
                      </div>
                      <div className="input-field col s4">
                        <i className="material-icons prefix">phone</i>
                        <input id="icon_telephone" type="number" className="validate" value={this.state.numberPhone} onChange={e => this.onChangePhone(e)}/>
                        <label htmlFor="icon_telephone">Телефон</label>
                      </div>
                      <div className="input-field col s4">
                          <DatePicker
                              locale='ru'
                              dateFormat={this.state.dateFormat}
                              timeIntervals={this.state.timeIntervals}
                              showTimeSelect
                              selected={this.state.selectedDate}
                              onChange={date => this.setSelectedDate(date)}
                              excludeTimes={this.generationExcludeTimes(
                                  [{"minutes":30,"hour":15},{"minutes":30,"hour":16}]
                                )
                              }
                          />
                      </div>
                    </div>
                    <div className="row elementsRadioButton">
                      <div className="input-field col s6">
                        <select ref={this.getSelectRef} multiple>
                            <option value="" disabled >Выберите зону</option>
                          {
                              this.state.zoneList.map((zone,index) => (
                                <option key={index} value={zone}>{zone}</option>
                              ))}
                        </select>
                      </div>
                      <div className="col s6">
                          {
                              this.state.depilationMethods.map((method,index) => {
                                  return ( <Fragment key={index}>
                                                  <label>
                                                      <input className="with-gap" name="groupDepilation" type="radio" value={method}
                                                            checked={this.state.selectedOptionDepilation === method}
                                                            onChange={e => this.onValueChangeDepilation(e)}/>
                                                      <span style={{marginRight:'10px'}}>{method}</span>
                                                  </label>
                                          </Fragment>
                                        )
                              })
                          }
                      </div>
                    </div>
                    <div className="row">
                        <textarea className="textArea" value={this.state.text} placeholder={textArea} onChange={event => this.onChangeText(event)}/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer customModalFooter">
                <a href="#!" onClick={()=> this.closeModalSave()} className="modal-close waves-effect waves-green btn-flat">Сохранить</a>
                <a href="#!" onClick={()=> this.clearFields()} className="modal-close waves-effect waves-green btn-flat">Отмена</a>
              </div>
            </div>
      );
}
}
export default Modal;
