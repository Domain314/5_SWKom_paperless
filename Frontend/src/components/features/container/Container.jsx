import React from 'react';

const Container = ({ children }) => {
    return (
        <div className="w-full flex justify-center p-4 debug-1">
            <div className="w-full max-w-[1400px] debug-2">
                {children}
            </div>
        </div>
    );
};

export default Container;
