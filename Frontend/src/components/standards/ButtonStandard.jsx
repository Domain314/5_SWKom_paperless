import React from 'react';

const ButtonStandard = ({ content, onClick, className, ariaLabel = '' }) => {
    return (
        <button
            className={`rounded-md bg-cyan-300 ${className}`}
            onClick={onClick}
            aria-label={ariaLabel}
        >
            {content}
        </button>
    );
};

export default ButtonStandard;