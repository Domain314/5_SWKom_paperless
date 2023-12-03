import React, { useState } from "react";

import TrashIcon from "../../../assets/img/icons/trash.svg";
import TrashOpenIcon from "../../../assets/img/icons/trash-open.svg";

const DocumentPreview = ({ name, contentType, size, onClick, onDelete }) => {

    const [isHoveringDelete, setIsHoveringDelete] = useState(false);

    function convertBytesToMB(bytes) {
        const megabytes = bytes / 1024 / 1024;
        return `${megabytes.toFixed(2)} MB`;
    }

    const getExtensionFromContentType = (contentType) => {
        const mimeTypes = {
            // Documents
            "application/pdf": "PDF",
            "application/msword": "DOC",
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document": "DOCX",
            "application/vnd.ms-excel": "XLS",
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": "XLSX",
            "application/vnd.ms-powerpoint": "PPT",
            "application/vnd.openxmlformats-officedocument.presentationml.presentation": "PPTX",
            "application/x-iwork-pages-sffpages": "PAGES",
            "text/plain": "TXT",
            "application/rtf": "RTF",
            "application/vnd.oasis.opendocument.text": "ODT",
            "application/epub+zip": "EPUB",

            // Images
            "image/jpeg": "JPEG",
            "image/png": "PNG",
            "image/gif": "GIF",
            "image/bmp": "BMP",
            "image/svg+xml": "SVG",
            "image/tiff": "TIFF",
            "image/webp": "WEBP",

            // Audio
            "audio/mpeg": "MP3",
            "audio/ogg": "OGG",
            "audio/wav": "WAV",
            "audio/x-aiff": "AIFF",
            "audio/flac": "FLAC",
            "audio/mp4": "M4A",

            // Video
            "video/mp4": "MP4",
            "video/x-msvideo": "AVI",
            "video/x-ms-wmv": "WMV",
            "video/mpeg": "MPEG",
            "video/ogg": "OGV",
            "video/webm": "WEBM",
            "video/quicktime": "MOV",

            // Archives
            "application/zip": "ZIP",
            "application/x-rar-compressed": "RAR",
            "application/x-7z-compressed": "7Z",
            "application/x-tar": "TAR",
            "application/gzip": "GZIP",

            // Others
            "application/json": "JSON",
            "application/xml": "XML",
        };

        return mimeTypes[contentType] || "Unknown";
    };

    const fileExtension = getExtensionFromContentType(contentType);

    const handleOnDeleteClick = (e) => {
        e.stopPropagation();
        onDelete(name);
    };

    const handleMouseEnter = () => {
        setIsHoveringDelete(true);
    };

    const handleMouseLeave = () => {
        setIsHoveringDelete(false);
    };

    return (
        <div onClick={() => onClick(name)} className="bg-[#1C1D26] min-h-[200px] flex flex-col justify-between text-[#F3F3F4] rounded-[10px] p-4 lg:p-6 hover:border-2 hover:border-[#0020FF] transition-all duration-300 cursor-pointer z-[0]">

            <p className="font-extrabold break-words">{name}</p>

            <div className="flex justify-between">

                <div className="flex items-center gap-2 opacity-60">
                    <p className="font-extrabold">{fileExtension}</p>
                    <p className="font-bold">{convertBytesToMB(size)}</p>
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