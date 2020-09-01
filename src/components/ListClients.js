import React, {Fragment} from 'react';

export const ListClients = ({clients}) => {
    return (
        <ul className="collection">
            {clients.map(client => (
                <li className="collection-item"
                    key={client.id}>{client.Name}</li>
            ))}
        </ul>
    )
}