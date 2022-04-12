import React, { useState } from 'react';
import Profile from './Profile';
import './Estilos.css';

const HomeL = () => {
	const [inputText, setInputText] = useState('');
	const [savedData, setSavedData] = useState(false);

	const handleInputChange = (e) => {
		const text = e.target.value;
		setInputText(text);

		if (text === '') {
			setSavedData(false);
		}
	};

	const saveData = () => {
		localStorage.setItem('nombre', inputText);
		setSavedData(true);
	};

	return (
		<div className='container d-flex flex-column '>
			<div>
				<label className='mb-3 title'>Local Storage</label>
			</div>
			<div className=' d-flex flex-column justify-content-center align-items-center '>
				<input
					className='input d-flex'
					onChange={handleInputChange}
					placeholder='Ingresa tu nombre'
				/>
				<button className='button d-flex mb-3' onClick={saveData}>
					Guardar
				</button>
			</div>

			{!!savedData && <Profile />}
		</div>
	);
};

export default HomeL;
