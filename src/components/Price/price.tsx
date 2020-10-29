import React, { useState,useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import DataTable from 'react-data-table-component';

import styles from './price.module.scss';

interface Row {
  id: number;
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
    { id: 1, name: 'Руки до локтя', cost: 400 },
    { id: 2, name: 'Ноги полностью', cost: 1000},
    { id: 3, name: 'Бедра', cost: 500},
    { id: 4, name: 'Голени', cost: 500},
    { id: 5, name: 'Руки полностью', cost: 500},
    { id: 6, name: 'Зона на лице', cost: 100},
    { id: 7, name: 'Подмышечные впадины', cost: 200},
    { id: 8, name: 'Спина', cost: 500},
    { id: 9, name: 'Дорожка на животе', cost: 100},
    { id: 10, name: 'Классическое бикини', cost: 450},
    { id: 11, name: 'Глубокое бикини', cost: 650}
  ];

const priceForPrimaryProcedure = [
    { id: 1, name: 'Руки до локтя', cost: 400 },
    { id: 2, name: 'Ноги полностью', cost: 1100},
    { id: 3, name: 'Бедра', cost: 550},
    { id: 4, name: 'Голени', cost: 550},
    { id: 5, name: 'Руки полностью', cost: 500},
    { id: 6, name: 'Зона на лице', cost: 100},
    { id: 7, name: 'Подмышечные впадины', cost: 300},
    { id: 8, name: 'Спина', cost: 500},
    { id: 9, name: 'Дорожка на животе', cost: 100},
    { id: 10, name: 'Классическое бикини', cost: 550},
    { id: 11, name: 'Глубокое бикини', cost: 750}
];

const procedureFullLegs:Row = price.filter(element => element.name === 'Ноги полностью').pop();
const procedureDeepBikini:Row = price.filter(element => element.name === 'Глубокое бикини').pop();
const procedureShins:Row = price.filter(element => element.name === 'Голени').pop();


export default function Price() {
  const [selectedRows, setSelectedRows] = useState<Set<Row>>(new Set<Row>());
  const [primaryProcedure, setPrimaryProcedure] = useState(false);
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
  function countCostOfThePrimaryProcedure(): number {
    let rows = []; 
    selectedRows.forEach(element => {
      rows.push(priceForPrimaryProcedure.filter(primEl => primEl.name === element.name).pop());
    });

    return rows.reduce((sum,{cost}:{cost: number}) => sum + cost,0);
  }

  function countCostOfTheProcedure(): number {
    let currentCost = 0;
    for (let row of selectedRows) {
      currentCost += row.cost;
    }
    return currentCost;
  }

  useEffect(() => {
    const currentCost = primaryProcedure === true &&  selectedRows.size !=0 ? countCostOfThePrimaryProcedure() : countCostOfTheProcedure();
    changeCostOfTheProcedure(currentCost);
  }, [selectedRows,primaryProcedure]);

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
          <input type="checkbox" defaultChecked={false} onClick={()=> setPrimaryProcedure(!primaryProcedure)}/>
            <h4 className={styles.span__costProcedure__text}>{"Первичная процедура(после бритвы)"}</h4>
        </label>
      </div>
      <div>
        <h3 style={{marginLeft:"1rem"}}>{costOfTheProcedure}{" руб."}</h3>
      </div>
    </div>
    );
}