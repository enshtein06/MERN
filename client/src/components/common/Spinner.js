import React from 'react';
import spinner from './spinner.gif';

const Spinner = (props) => {
  return (
    <div>
    	<img 
    		src={spinner} 
    		alt="Loading..." 
    		style={{width: '200px', margin: 'auto', dispay: 'block'}}
    	/>
    </div>
  )
}

export default Spinner;