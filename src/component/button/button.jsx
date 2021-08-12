import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

function Button(
    {text,
     type,
     btnstyle,
     handleButtonClick,
     classname,
     icon,
     disabled = false,
    }
    ) {
    return (
        <div>
            <button
             type={type}
             title={text}
             style={btnstyle}
             className={classname || "button-wrap"}
             onClick={handleButtonClick}
             disabled={disabled}
            > 
            {icon}{text}
            </button>
        </div>
    )
}

Button.ProTypes = {
    type: PropTypes.string,
    title: PropTypes.string.isRequired,
    style:PropTypes.object,
    className:PropTypes.string,
    handleButtonClick:PropTypes.func,
    disabled:PropTypes.bool
}
export default Button
