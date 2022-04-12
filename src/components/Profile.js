import { useEffect, useState } from 'react';

const Profile = () => {
	const [name, setName] = useState('');

	const getData = () => {
		return localStorage.getItem('name');
	};

	useEffect(() => {
		setName(getData());
	}, []);

	return (
		<div className='d-flex justify-content-center mt-5 ' >
			<h2 className='profile'>Hola {name}</h2>
		</div>
	);
};
export default Profile