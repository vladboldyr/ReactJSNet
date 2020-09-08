import React, {Fragment} from 'react';
import DataTable,{ createTheme } from 'react-data-table-component';

createTheme('customTheme', {
    text: {
        primary: 'rgba(0, 0, 0, 0.87)',
        secondary: 'rgba(0, 0, 0, 0.54)',
        disabled: 'rgba(0, 0, 0, 0.38)',
    },
    background: {
        default: '#FFFFFF',
    },
    context: {
        background: '#e3f2fd',
        text: 'rgba(0, 0, 0, 0.87)',
    },
    divider: {
        default: 'rgba(0,0,0,.12)',
    },
    button: {
        default: 'rgba(0,0,0,.54)',
        focus: 'rgba(0,0,0,.12)',
        hover: 'rgba(0,0,0,.12)',
        disabled: 'rgba(0, 0, 0, .18)',
    },
    sortFocus: {
        default: 'rgba(0, 0, 0, .54)',
    },
    selected: {
        default: '#e3f2fd',
        text: 'rgba(0, 0, 0, 0.87)',
    },
    highlightOnHover: {
        default: '#EEEEEE',
        text: 'rgba(0, 0, 0, 0.87)',
    },
    striped: {
        default: '#FAFAFA',
        text: 'rgba(0, 0, 0, 0.87)',
    }
});
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
    console.log(clients);
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