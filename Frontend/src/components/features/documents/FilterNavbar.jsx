import React, { useState, useEffect } from "react";

import CheckIcon from "../../../assets/img/icons/check.svg";
import WarningIcon from "../../../assets/img/icons/warning.svg";
import UploadButton from "./UploadButton";
import ReloadButton from "./ReloadButton";
import SortPicker from "./SortPicker";
import SearchInput from "./SearchInput";

import './FilterNavbar.css';

const FilterNavbar = () => {

    const [name, setName] = useState("Dominik Englert");
    const [searchText, setSearchText] = useState("");
    const [showWarning, setShowWarning] = useState(true);
    const [selectedFile, setSelectedFile] = useState(null);
    const sortOptions = [
        { value: 'newest', label: 'Neuste' },
        { value: 'oldest', label: 'Älteste' },
        { value: 'favorites', label: 'Favoriten' },
    ];

    const handleSearchChange = (e) => {
        setSearchText(e.target.value);
    }

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleUploadButton = () => {
        document.getElementById('fileInput').click();
    };

    const handleReloadButton = () => {
        console.log("RELOAD TBD");
    }

    const handleFileUpload = () => {
        if (selectedFile) {
            // Perform the API call to upload the file
            const formData = new FormData();
            formData.append('file', selectedFile);

            // Replace with your API call
            fetch('YOUR_API_ENDPOINT', {
                method: 'POST',
                body: formData,
            })
                .then(response => response.json())
                .then(data => console.log(data))
                .catch(error => console.error('Error:', error));
        }
    };

    useEffect(() => {
        // Whenever the selectedFile changes, upload it
        if (selectedFile) {
            handleFileUpload();
        }
    }, [selectedFile]);

    return (
        <div className="w-full sticky top-4 bg-[#1C1D26] p-4 lg:p-6 rounded-[10px] z-[10000] top-bottom-shadow">

            {/* top line (name + status) */}
            <div className="w-full flex justify-between items-center text-[#F3F3F4]">

                <div className="flex items-center gap-1">
                    <p>Dokumente von</p>
                    <p className="font-extrabold">{name}</p>
                </div>

                <div className="flex items-center gap-2">
                    <img className="w-[25px] h-[25px]" src={(showWarning) ? WarningIcon : CheckIcon} alt="Check Icon" />
                    <p className="opacity-60 hidden md:block">{(showWarning) ? "loading..." : "all saved"}</p>
                </div>

            </div>

            {/* tool line (search, sort, upload, reload) */}
            <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4 mt-4">

                <SearchInput searchText={searchText} handleSearchChange={handleSearchChange} />

                <div className="w-full md:w-auto flex justify-between md:justify-center items-center gap-4">
                    <SortPicker options={sortOptions} />

                    {/* HIDDEN INPUT FOR FILE UPLOAD */}
                    <input
                        type="file"
                        id="fileInput"
                        style={{ display: 'none' }}
                        onChange={handleFileChange}
                    />
                    <div className="flex items-center gap-4">
                        <UploadButton onClick={handleUploadButton} />

                        <ReloadButton onClick={handleReloadButton} />
                    </div>
                </div>


            </div>


        </div>
    )
}

export default FilterNavbar;