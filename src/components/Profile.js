import React, { useEffect, useState } from 'react';

const Profile = () => {
	const [nombre, setNombre] = useState('');

	const getData = () => {
		return localStorage.getItem('nombre');
	};

	useEffect(() => {
		setNombre(getData());
	}, []);

	return (
		<div className='d-flex justify-content-center mt-5 ' >
			<h2 className='profile'>Hola {nombre}</h2>
		</div>
	);
};
export default Profile