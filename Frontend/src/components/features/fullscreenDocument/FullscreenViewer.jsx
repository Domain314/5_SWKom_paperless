import React from 'react';

import Logo from "../../../assets/img/logo/logo.svg";

const FullscreenViewer = ({ file, onClose }) => {
    const renderContent = () => {
        if (file.contentType === "application/pdf" || file.contentType === "application/octet-stream") {
            // Treat "application/octet-stream" as a potential PDF
            return (
                <div className='h-full flex flex-col justify-center items-center'>
                    <iframe className='w-[100%] md:w-[80%] lg:w-[50%]' src={file.url} title={file.name} height="100%"></iframe>
                </div>

            );
        } else if (file.contentType.startsWith("image/")) {
            return <img src={file.url} alt={file.name} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />;
        }
        // ...other conditions
    };

    const handleDownloadClick = () => {
        // Create an anchor element
        const link = document.createElement('a');
        link.href = file.url;
        link.download = file.name; // Set the download attribute to the desired filename

        // Append the link to the body, trigger the click, then remove it
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };


    return (
        <div className="w-full h-full fixed top-0 left-0 bg-[#15151d] flex flex-col z-[30000]">
            <div className='w-full flex justify-between items-center p-4'>
                <img src={Logo} className="h-10" alt="Logo" />

                <div className='flex items-center gap-4'>
                    <button className='bg-[#0520ff] px-4 py-2 rounded-full' onClick={handleDownloadClick}>
                        <p className='font-bold'>Download</p>
                    </button>

                    <button className='bg-[#0520ff] px-4 py-2 rounded-full' onClick={onClose}>
                        <p className='font-bold'>Close</p>
                    </button>
                </div>

            </div>

            {renderContent()}
        </div>
    );
};

export default FullscreenViewer;
