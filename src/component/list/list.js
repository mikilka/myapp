import React from 'react';



const ListView = props => {
	const users = props.users;
	return (
		<div>
			<ul>
				{
					users.map(user => (
						<li key={user.id}>{user.name}</li>
						))
				}
			</ul>
		</div>
	)
};

export default ListView;