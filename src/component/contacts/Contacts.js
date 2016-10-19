import React from 'react';
import List from '../list/list'

const users = [
    {id: 0, name: 'John Doe'},
    {id:1, name: 'Den Abramov'},
    {id: 2, name: 'Vasya Pechkin'},
    {id: 3, name: 'Dima Shitomirskiy'}
];

const contactsView = () => {
    return (
        <ul>
            <List users={users}/>
        </ul>
        )
};

export default contactsView;