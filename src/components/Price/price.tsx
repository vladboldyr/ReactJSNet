import React, { useState,useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import DataTable from 'react-data-table-component';

import styles from './price.module.scss';

interface Row {
  id: string;
  name: string;
  cost: number;
}

const customStyles = {
  rows: {
      style: {
          fontSize:'16px',
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
      fontSize:'16px'
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
    { id: uuidv4(), name: 'Руки до локтя', cost: 400 },
    { id: uuidv4(), name: 'Ноги полностью', cost: 1000},
    { id: uuidv4(), name: 'Бедра', cost: 500},
    { id: uuidv4(), name: 'Голени', cost: 500},
    { id: uuidv4(), name: 'Руки полностью', cost: 500},
    { id: uuidv4(), name: 'Зона на лице', cost: 100},
    { id: uuidv4(), name: 'Подмышечные впадины', cost: 200},
    { id: uuidv4(), name: 'Спина', cost: 500},
    { id: uuidv4(), name: 'Дорожка на животе', cost: 100},
    { id: uuidv4(), name: 'Классическое бикини', cost: 450},
    { id: uuidv4(), name: 'Глубокое бикини', cost: 650}
  ];

const procedureFullLegs:Row = price.filter(element => element.name === 'Ноги полностью').pop();
const procedureDeepBikini:Row = price.filter(element => element.name === 'Глубокое бикини').pop();
const procedureShins:Row = price.filter(element => element.name === 'Голени').pop();


export default function Price() {
  const [selectedRows, setSelectedRows] = useState<Set<Row>>(new Set<Row>());
  const [firstComplexProcedure,setFirstComplexProcedure] = useState(false);
  const [secondComplexProcedure,setSecondComplexProcedure] = useState(false);
  const [costOfTheProcedure, changeCostOfTheProcedure] = useState(0);

  const addFirstPriceOfTheProcedure = e => {
    setFirstComplexProcedure(!firstComplexProcedure);
    if (!e.target.checked) {
      selectedRows.delete(procedureFullLegs);
      if(!secondComplexProcedure)
        selectedRows.delete(procedureDeepBikini);
      setSelectedRows(new Set([...selectedRows]));
    }
    else {
      const procedures = [procedureFullLegs,procedureDeepBikini]; 
      setSelectedRows(new Set([...selectedRows,...procedures]));
    }
  }

  const addSecondPriceOfTheProcedure = e => {
    setSecondComplexProcedure(!secondComplexProcedure);
    if (!e.target.checked) {
      selectedRows.delete(procedureShins);
      if(!firstComplexProcedure)
        selectedRows.delete(procedureDeepBikini);
      setSelectedRows(new Set([...selectedRows]));
    }
    else {
      const procedures = [procedureShins,procedureDeepBikini]; 
      setSelectedRows(new Set([...selectedRows,...procedures]));
    }
  }

  useEffect(() => {
    let currentCost = 0;
    for(let row of selectedRows) {
      currentCost += row.cost;
    }
    changeCostOfTheProcedure(currentCost);
  }, [selectedRows]);

  const handleRowSelected = React.useCallback(state => {
    if (firstComplexProcedure) {
      const currentSelectedTable = state.selectedRows.filter(element => element.name !== "Подмышечные впадины"); 
      const procedures = [...currentSelectedTable,procedureFullLegs,procedureDeepBikini]; 
      setSelectedRows(new Set([...procedures]));  
    }
    else if (secondComplexProcedure) {
      const currentSelectedTable = state.selectedRows.filter(element => element.name !== "Подмышечные впадины"); 
      const procedures = [...currentSelectedTable,procedureShins,procedureDeepBikini]; 
      setSelectedRows(new Set([...procedures])); 
    }
    else 
      setSelectedRows(new Set([...state.selectedRows]));

  }, [selectedRows]);

  return( 
    <div>
      <div>РАССЧИТАЙТЕ СТОИМОСТЬ ШУГАРИНГА</div>
      <div className={styles.wrapper__table}>
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
      <div className={styles.wrapper__costForComplexProcedure}>
        <h4 style={{display:'flex'}}>Комплексы</h4>
        <label className={styles.label__costProcedure}>
          <input type="checkbox" onClick={e => addFirstPriceOfTheProcedure(e)} defaultChecked={false}/>
            <span className={styles.span__costProcedure}>
              <h5 className={styles.span__costProcedure__text}>
                    {procedureFullLegs.name + "+" + procedureDeepBikini.name }{"(подмышечные впадины в подарок) "}
                    {procedureFullLegs.cost + procedureDeepBikini.cost}{" руб."}
              </h5>
          </span>
        </label>
        <label className={styles.label__costProcedure}>
          <input type="checkbox" onClick={e => addSecondPriceOfTheProcedure(e)} defaultChecked={false}/>
            <span className={styles.span__costProcedure}>
              <h5 className={styles.span__costProcedure__text}>
                    {procedureShins.name + "+" + procedureDeepBikini.name }{"(подмышечные впадины в подарок) "}
                    {procedureShins.cost + procedureDeepBikini.cost}{" руб."}
              </h5>
          </span>
        </label>
        <label className={styles.label__costProcedure}>
          <input type="checkbox"/>
            <h4 className={styles.span__costProcedure__text}>{"Первичная процедура,(после бритвы)"}</h4>
        </label>
      </div>
      <div>
        <h3 style={{marginLeft:"1rem"}}>{costOfTheProcedure}{" руб."}</h3>
      </div>
    </div>
    );
}