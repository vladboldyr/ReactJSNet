import React, {Fragment} from 'react';
import DataTable,{ createTheme } from 'react-data-table-component';
import {customTheme} from './custom-theme';

const customStyles = {
    rows: {
        style: {
            fontSize:'17px'
        }
    }
};
const columns = [
    {
        name: 'Номер',
        selector: 'id',
        sortable: true,
    },
    {
        name: 'Имя',
        selector: 'name',
        sortable: true,
    },
    {
        name: 'Телефон',
        selector: 'phone',
    },
    {
        name: 'Дата и время',
        selector: 'Date',
        sortable: true,
    },
    {
        name: 'Зоны',
        selector: 'zoneList',
        sortable: true,
    },
    {
        name: 'Метод',
        selector: 'depilation',
        sortable: true,
    },
    {
        name: 'Комментарий',
        selector: 'text',
        compact: true,
    }
];

export const ListClients = ({clients}) => {
    return (
            <DataTable
                columns={columns}
                data={clients}
                highlightOnHover={true}
                theme="customTheme"
                responsive={true}
                customStyles={customStyles}
            />

    )
}