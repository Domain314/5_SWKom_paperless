import React, { useState } from "react";

import TrashIcon from "../../../assets/img/icons/trash.svg";
import TrashOpenIcon from "../../../assets/img/icons/trash-open.svg";

const DocumentPreview = ({ name, type, sizeKB }) => {

    const [isHoveringDelete, setIsHoveringDelete] = useState(false);

    function convertKBtoMB(kilobytes) {
        const megabytes = kilobytes / 1024;
        return `${megabytes.toFixed(2)} MB`;
    }

    const handleOnDeleteClick = () => {
        console.log("DELETE TBD");
    };

    const handleMouseEnter = () => {
        setIsHoveringDelete(true);
    };

    const handleMouseLeave = () => {
        setIsHoveringDelete(false);
    };

    return (
        <div className="bg-[#1C1D26] h-full min-h-[200px] flex flex-col justify-between text-[#F3F3F4] rounded-[10px] p-4 lg:p-6 hover:border-2 hover:border-[#0020FF] transition-all duration-300 cursor-pointer z-[0]">

            <p className="font-extrabold">{name}</p>

            <div className="flex justify-between">

                <div className="flex items-center gap-2 opacity-60">
                    <p className="font-extrabold">{type}</p>
                    <p className="font-bold">{convertKBtoMB(sizeKB)}</p>
                </div>

                <button
                    onClick={handleOnDeleteClick}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className="">
                    <img
                        className="min-w-[30px] h-[30px]"
                        src={isHoveringDelete ? TrashOpenIcon : TrashIcon}
                        alt="Delete Icon"
                    />
                </button>
            </div>

        </div>
    )
}

export default DocumentPreview;