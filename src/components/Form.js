import React, {Fragment, useState} from 'react';



export const Form = () => {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  console.log("call modal");
  return (
      <Fragment>
        <button data-target="modalAddClient" type="button" className="btn-floating btn-small waves-effect waves-light modal-trigger buttonPlus"><i className="material-icons">add</i></button>
        <div id="modalAddClient" className="modal">
          <div className="modal-content">
            <h4>Modal Header</h4>
            <p>A bunch of text</p>
          </div>
          <div className="modal-footer">
            <a href="#!" className="modal-close waves-effect waves-green btn-flat">Agree</a>
          </div>
        </div>
      </Fragment>
  );
}
