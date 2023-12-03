import React, { useState, useEffect } from "react";

import CheckIcon from "../../../assets/img/icons/check.svg";
import WarningIcon from "../../../assets/img/icons/warning.svg";
import UploadButton from "./UploadButton";
import ReloadButton from "./ReloadButton";
import SortPicker from "./SortPicker";
import SearchInput from "./SearchInput";

import { toast } from 'react-toastify';

import './FilterNavbar.css';

const FilterNavbar = ({ files, setFiles, sortOrder, setSortOrder }) => {

    const [name, setName] = useState("Admin");
    const [searchText, setSearchText] = useState("");
    const [showLoading, setShowLoading] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    const sortOptions = [
        { value: 'newest', label: 'Newest' },
        { value: 'oldest', label: 'Oldest' }
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
        setShowLoading(true);
        fetch('http://localhost:8081/files/get/all')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                setShowLoading(false);
                return response.json();
            })
            .then(newFiles => {
                // Sort and update the files list
                setFiles(sortFiles(newFiles, sortOrder));
                setShowLoading(false);
            })
            .catch(error => {
                setShowLoading(false);
                console.error('Error fetching files:', error);
                toast.error('Error fetching files');
            });
    };

    const handleFileUpload = () => {
        if (selectedFile) {
            setShowLoading(true);

            const formData = new FormData();
            formData.append('file', selectedFile);

            fetch('http://localhost:8081/files/upload', {
                method: 'POST',
                body: formData,
            })
                .then(response => response.json())
                .then(uploadedFile => {
                    console.log("Uploaded file response:", uploadedFile); // Log the response
                    // Prepend the new file to the existing files list
                    setFiles(prevFiles => [uploadedFile, ...prevFiles]);
                    setShowLoading(false);
                })
                .catch(error => {
                    setShowLoading(false);
                    console.error('Error:', error);
                    console.log("Error response:", error.response); // Log error response if available
                });
        }
    };

    const sortFiles = (files, sortOrder) => {
        return files.sort((a, b) => {
            const dateA = new Date(a.changedTime);
            const dateB = new Date(b.changedTime);
            if (sortOrder === 'newest') {
                return dateB - dateA; // Sort by descending order for newest
            } else {
                return dateA - dateB; // Sort by ascending order for oldest
            }
        });
    };

    const handleSortChange = (selectedOption) => {
        setSortOrder(selectedOption.value);
    };

    useEffect(() => {
        // Whenever the selectedFile changes, upload it
        if (selectedFile) {
            handleFileUpload();
        }
    }, [selectedFile]);

    // useEffect for sorting files
    useEffect(() => {
        // Sort files only when sortOrder changes
        const sortedFiles = sortFiles([...files], sortOrder);
        setFiles(sortedFiles);
    }, [sortOrder]); // Depend only on sortOrder

    return (
        <div className="w-full sticky top-4 bg-[#1C1D26] p-4 lg:p-6 rounded-[10px] z-[10000] top-bottom-shadow">

            {/* top line (name + status) */}
            <div className="w-full flex justify-between items-center text-[#F3F3F4]">

                <div className="flex items-center gap-1">
                    <p>Documents by</p>
                    <p className="font-extrabold">{name}</p>
                </div>

                <div className="flex items-center gap-2">
                    <img className="w-[25px] h-[25px]" src={(showLoading) ? WarningIcon : CheckIcon} alt="Check Icon" />
                    <p className="opacity-60 hidden md:block">{(showLoading) ? "loading..." : "all saved"}</p>
                </div>

            </div>

            {/* tool line (search, sort, upload, reload) */}
            <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4 mt-4">

                <SearchInput searchText={searchText} handleSearchChange={handleSearchChange} />

                <div className="w-full md:w-auto flex justify-between md:justify-center items-center gap-4">
                    <SortPicker options={sortOptions} onChange={handleSortChange} />

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