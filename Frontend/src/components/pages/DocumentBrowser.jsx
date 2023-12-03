import React, { useState, useEffect } from "react";
import SplashScreen from "../features/splashscreen/SplashScreen";
import Container from "../features/container/Container";
import PreviewList from "../features/documents/PreviewList";
import FilterNavbar from "../features/documents/FilterNavbar";
import FullscreenViewer from "../features/fullscreenDocument/FullscreenViewer";


const DocumentBrowser = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [files, setFiles] = useState([]);
    const [sortOrder, setSortOrder] = useState('newest');

    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileClick = (fileName) => {
        fetch(`http://localhost:8081/files/get/${fileName}`)
            .then(response => response.blob())
            .then(blob => {
                const url = URL.createObjectURL(blob);
                // console.log("Blob URL:", url); // Check the URL
                // console.log("Blob type: ", blob.type)
                // console.log("Blob name:", blob.name)
                setSelectedFile({
                    url: url,
                    name: fileName,
                    contentType: blob.type
                });
            })
            .catch(error => console.error('Error fetching file:', error));

    };

    const handleDelete = (fileName) => {
        fetch(`http://localhost:8081/files/delete/${fileName}`, {
            method: 'POST',
            // Include headers if needed (e.g., for authentication)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to delete file');
                }
                console.log(response);
                setFiles(files.filter(file => file.name !== fileName));
            })
            .catch(error => {
                console.error('Error deleting file:', error);
                // Handle error (e.g., show a notification to the user)
            });
    };

    const handleCloseFullscreen = () => {
        setSelectedFile(null);
        URL.revokeObjectURL(selectedFile.url); // Clean up
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

    useEffect(() => {
        fetch('http://localhost:8081/files/get/all')
            .then(response => response.json())
            .then(data => {
                const sortedData = sortFiles(data, sortOrder); // sort data after fetching
                setFiles(sortedData);
                setTimeout(() => setIsLoading(false), 2000);
            })
            .catch(error => console.error('Error fetching files:', error));

        // Set a minimum display time for the splash screen
        setTimeout(() => setIsLoading(false), 2000);
    }, [sortOrder]); // include sortOrder in dependency array

    return (
        <div className="w-full h-full">

            {isLoading && <SplashScreen />}

            <Container>

                <FilterNavbar files={files} setFiles={setFiles} sortOrder={sortOrder} setSortOrder={setSortOrder} />

                <PreviewList files={files} onFileClick={handleFileClick} onDelete={handleDelete} />

            </Container>
            {selectedFile && <FullscreenViewer file={selectedFile} onClose={handleCloseFullscreen} />}

        </div>
    );
}

export default DocumentBrowser;