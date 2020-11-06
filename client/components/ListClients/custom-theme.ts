import {createTheme} from "react-data-table-component";

export const customTheme = createTheme('customTheme', {
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