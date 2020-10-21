import React, { useState,useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import DataTable from 'react-data-table-component';


const customStyles = {
  rows: {
      style: {
          fontSize:'15px',
          minHeight: '30px',
         // maxWidth:'50%'
      }
  },
  headCells: {
    style: {
      //paddingLeft: '8px', // override the cell padding for head cells
      //paddingRight: '8px',
      //width:'50%',
      //maxWidth:'50%'
      
    },
  },
  cells:{
    style:{
      fontSize:'15px'
    }
  }
};
const columns = [
  {
      name: 'Название',
      selector: 'name',
  },
  {
      name: 'Цена',
      selector: 'cost',
  }
]

const price = [
    { id: uuidv4(), name: 'Руки', cost: 'Руки' },
    { id: uuidv4(), name: 'Ноги полностью', cost: 'Ноги полностью'},
    { id: uuidv4(), name: 'Бедра', cost: 'Бедра'},
    { id: uuidv4(), name: 'Голени', cost: 'Голени'},
    { id: uuidv4(), name: 'Руки полностью', cost: 'Руки полностью'},
    { id: uuidv4(), name: 'До локтя', cost: 'До локтя'},
    { id: uuidv4(), name: 'От локтя', cost: 'От локтя'},
    { id: uuidv4(), name: 'Зона на лице', cost: 'Зона на лице'},
    { id: uuidv4(), name: 'Подмышечные впадины', cost: 'Подмышечные впадины' },
    { id: uuidv4(), name: 'Спина', cost: 'Спина' },
    { id: uuidv4(), name: 'Живот', cost: 'Живот'},
    { id: uuidv4(), name: 'Дорожка на животе', cost: 'Дорожка на животе'},
    { id: uuidv4(), name: 'Ягодицы', cost: 'Ягодицы'},
    { id: uuidv4(), name: 'Классическое бикини', cost: 'Классическое бикини'},
    { id: uuidv4(), name: 'Глубокое бикини', cost: 'Глубокое бикини'},
    { id: uuidv4(), name: 'Грудь', cost: 'Грудь' } 
  ];


// type Data = {
//     id: number;
//     name: string;
//     cost: number;
// };

export default function Price() {
  const [selectedRows, setSelectedRows] = React.useState([]);

  const handleRowSelected = React.useCallback(state => {
    setSelectedRows(state.selectedRows);
    console.log(state.selectedRows);
  }, []);

  return( 
    <div>
      <div>РАССЧИТАЙТЕ СТОИМОСТЬ ШУГАРИНГА</div>
      <div style={{width:'50%'}}>
        <DataTable
            columns={columns}
            data={price}
            noHeader={true}
            highlightOnHover={true}
            customStyles={customStyles}
            noContextMenu={true}
            selectableRows
            selectableRowsNoSelectAll={true}
            onSelectedRowsChange={handleRowSelected}
          />
      </div>
      <div style={{marginLeft:'0.9rem',marginTop:'1rem'}}>
        <label style={{display:'flex',flexWrap:'nowrap',alignItems:'baseline'}}>
          <input type="checkbox" style={{marginRight:'0.5rem',display:'flex'}}/>
            <span style={{display:'flex',alignItems:'center'}}>
              <h4 style={{display:'flex'}}>Комплекс</h4>
              <h5 style={{display:'flex',fontWeight:'normal',paddingLeft:'20px'}}>Ноги полностью + глубокое бикини + подмышки</h5>
          </span>
        </label>
      </div>
    </div>
    );
}