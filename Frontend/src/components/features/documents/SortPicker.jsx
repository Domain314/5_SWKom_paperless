import React from "react";
import './SortPicker.css';

const SortPicker = ({ options }) => {

    return (
        <div className="flex items-center gap-2">
            <p className="hidden lg:block text-[#F3F3F4] opacity-60 whitespace-nowrap">Sortieren nach</p>
            <div className="dropdown-container">
                <select className="dropdown">
                    {options.map((option, index) => (
                        <option key={index} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>
        </div>

    );
};

export default SortPicker;