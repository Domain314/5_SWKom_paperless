import React from "react";

import UploadIcon from "../../../assets/img/icons/upload.svg";

const UploadButton = ({ onClick }) => {
    return (
        <button
            onClick={onClick}
            className="flex items-center gap-2 bg-[#0020FF] hover:bg-[#15161D] transition-all duration-300 text-[#F3F3F4] py-2 px-8 rounded-full"
        >
            <img className="min-w-[30px] h-[30px]" src={UploadIcon} alt="Upload Icon" />
            <p className="hidden sm:block font-extrabold">Upload</p>
        </button>
    )
}

export default UploadButton;