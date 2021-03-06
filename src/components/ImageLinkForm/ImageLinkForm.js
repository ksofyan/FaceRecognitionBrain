import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {

	return (
			<div>
				<p className='f3 white'>
					{'This Magic Brain will detect faces in your pictures. Give it a try!'}
				</p>
				<div className='centre'>
					<div className='form center pa4 b3 shadow-4'>
						<input className='f4 pa2 w-70 centre ' type='text' onChange={onInputChange}/>
						<button 
						className ='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'
						onClick={onButtonSubmit}
						>Detect</button>
					</div>
				</div>
			</div>
		);
}

export default ImageLinkForm;

// pa4 br3 shadow-2'>