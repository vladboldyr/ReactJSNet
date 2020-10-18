import React from 'react';
import DataTable, { createTheme } from 'react-data-table-component';

const customStyles = {
    rows: {
        style: {
            fontSize: '17px'
        }
    }
};
const columns = [
    // {   name:'id',
    //     selector:'id'
    // },
    {
        name: 'Наименование',
        selector: 'name',
        sortable: false,
    },
    {
        name: 'Цена',
        selector: 'cost',
        sortable: true,
    },
];
const costs = [
    { id: 1, name: 'Руки', cost: 'Руки' },
    { id: 2, name: 'Ноги полностью', cost: 'Ноги полностью' },
    { id: 3, name: 'Бедра', cost: 'Бедра' },
    { id: 4, name: 'Голени', cost: 'Голени' },
    { id: 5, name: 'Руки полностью', cost: 'Руки полностью' },
    { id: 6, name: 'До локтя', cost: 'До локтя' },
    { id: 7, name: 'От локтя', cost: 'От локтя' },
    { id: 8, name: 'Зона на лице', cost: 'Зона на лице' },
    { id: 9, name: 'Подмышечные впадины', cost: 'Подмышечные впадины' },
    { id: 10, name: 'Спина', cost: 'Спина' },
    { id: 11, name: 'Живот', cost: 'Живот' },
    { id: 12, name: 'Дорожка на животе', cost: 'Дорожка на животе' },
    { id: 13, name: 'Ягодицы', cost: 'Ягодицы' },
    { id: 14, name: 'Классическое бикини', cost: 'Классическое бикини' },
    { id: 15, name: 'Глубокое бикини', cost: 'Глубокое бикини' },
    { id: 16, name: 'Грудь', cost: 'Грудь' }
];


// type Data = {
//     id: number;
//     name: string;
//     cost: number;
// };

export default function Price() {
    const handleChange = (state) => {
        console.log('Selected Rows: ', state.selectedRows);
    };
    return (
        <>
            <h3>Прайс на услуги</h3>
            <DataTable
                columns={columns}
                data={costs}
                highlightOnHover={true}
                theme="customTheme"
                responsive={true}
                customStyles={customStyles}
                selectableRows
                //Selected={handleChange}
            />
        </>
    );
}