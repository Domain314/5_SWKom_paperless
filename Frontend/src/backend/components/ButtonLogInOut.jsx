import React from 'react';

const ButtonLogInOut = ({ content, onClick, className }) => {
    return (
        <button
            className={`m-2 px-4 py-2 uppercase tracking-wide rounded-lg hover:font-bold hover:scale-110 hover:shadow-lg transition duration-200 ${className}`}
            onClick={onClick}
        >
            {content}
        </button>
    );
};

export default ButtonLogInOut;