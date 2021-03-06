import React, { useState,useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import DataTable from 'react-data-table-component';

interface Row {
  id: string;
  name: string;
  cost: number;
}

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
    const procedures = [procedureFullLegs,procedureDeepBikini]; 
    setSelectedRows(new Set([...selectedRows,...procedures]));

    if (!e.target.checked) {
      selectedRows.delete(procedureFullLegs);
      selectedRows.delete(procedureDeepBikini);
      setSelectedRows(new Set([...selectedRows]));
      return;
    }
  }

  const addSecondPriceOfTheProcedure = e => {
    setSecondComplexProcedure(!secondComplexProcedure);
    const procedures = [procedureShins,procedureDeepBikini]; 
    setSelectedRows(new Set([...selectedRows,...procedures]));

    if (!e.target.checked) {
      selectedRows.delete(procedureShins);
      selectedRows.delete(procedureDeepBikini);
      setSelectedRows(new Set([...selectedRows]));
      return;
    }
  }

  useEffect(() => {
    console.log(selectedRows);
    let currentCost = 0;
    for(let row of selectedRows) {
      currentCost += row.cost;
    }
    changeCostOfTheProcedure(currentCost);
    
  }, [selectedRows,firstComplexProcedure,secondComplexProcedure]);

  const handleRowSelected = React.useCallback(state => {
    if (firstComplexProcedure) {
      setSelectedRows(new Set([...selectedRows,...state.selectedRows]));  
    }
    else if (secondComplexProcedure) {
      setSelectedRows(new Set([...selectedRows,...state.selectedRows]));  
    }
    else 
      setSelectedRows(new Set([...state.selectedRows]));

  }, [selectedRows]);

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
        <h4 style={{display:'flex'}}>Комплексы</h4>
        <label style={{display:'flex',flexWrap:'nowrap',alignItems:'baseline'}}>
          <input type="checkbox" style={{marginRight:'0.5rem',display:'flex'}} onClick={e => addFirstPriceOfTheProcedure(e)} defaultChecked={false}/>
            <span style={{display:'flex',alignItems:'center'}}>
              <h5 style={{display:'flex',fontWeight:'normal',paddingLeft:'20px'}}>
                    {procedureFullLegs.name + "+" + procedureDeepBikini.name }{"(подмышечные впадины в подарок) "}
                    {procedureFullLegs.cost + procedureDeepBikini.cost}{" руб."}
              </h5>
          </span>
        </label>
        <label style={{display:'flex',flexWrap:'nowrap',alignItems:'baseline'}}>
          <input type="checkbox" style={{marginRight:'0.5rem',display:'flex'}} onClick={e => addSecondPriceOfTheProcedure(e)} defaultChecked={false}/>
            <span style={{display:'flex',alignItems:'center'}}>
              <h5 style={{display:'flex',fontWeight:'normal',paddingLeft:'20px'}}>
                    {procedureShins.name + "+" + procedureDeepBikini.name }{"(подмышечные впадины в подарок) "}
                    {procedureShins.cost + procedureDeepBikini.cost}{" руб."}
              </h5>
          </span>
        </label>
      </div>
      <div>
        <h3>{costOfTheProcedure}{" руб."}</h3>
      </div>
    </div>
    );
}