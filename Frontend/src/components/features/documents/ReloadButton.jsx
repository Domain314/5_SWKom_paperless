import React from "react";

import ReloadIcon from "../../../assets/img/icons/refresh.svg";

const ReloadButton = ({ onClick }) => {
    return (
        <button onClick={onClick}>
            <img className="min-w-[30px] h-[30px]" src={ReloadIcon} alt="Reload Icon" />
        </button>
    )
}

export default ReloadButton;