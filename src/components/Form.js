import React,{useState} from 'react';



export const Form = ({modalAddClient}) => {
  [name,setName] = useState("");
  [email,setEmail] = useState("");


  return (
    <div id={{modalAddClient}} class="modal">
      <div class="modal-content">
        <h4>Modal Header</h4>
        <p>A bunch of text</p>
      </div>
      <div class="modal-footer">
        <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
      </div>
    </div>
  );
}
