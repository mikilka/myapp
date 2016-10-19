import React from 'react';
import List from '../../component/list/list'

const users = [
	{id: 0, name: 'John Doe'},
	{id:1, name: 'Den Abramov'}
];

const dogs = [
	{id: 4, name: 'Sharik'},
	{id: 5, name: 'Barbos'}
];


class Main extends React.Component {
    render () {
        return (
            <div>
                <List users={users}/>
                <List users={dogs}/>
            </div>
            )
    }
}

export default Main;