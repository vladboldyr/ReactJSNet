import React, { useState,useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import DataTable from 'react-data-table-component';


const customStyles = {
  rows: {
      style: {
          fontSize:'17px'
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
    return( 
      <div>
        <div>Price</div>
        <DataTable
                columns={columns}
                data={price}
                highlightOnHover={true}
                customStyles={customStyles}
                selectableRows
            />
      </div>
    );
}