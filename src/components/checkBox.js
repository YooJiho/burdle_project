import React from 'react';

function CheckBoxComponent({id, checkName}) {
	return(
		<span className="check_wrap">
			<input type="checkbox" id={id} className="common_check" />
			<label htmlFor={id} className="common_check">{checkName}</label>
		</span>
	)
}

export default CheckBoxComponent;