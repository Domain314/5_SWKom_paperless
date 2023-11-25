import React from "react";
import FilterNavbar from "./FilterNavbar";
import Container from "../container/Container";
import DocumentPreview from "./DocumentPreview";
import demoFiles from '../../../utility/helperData.js';

const BrowseDocuments = () => {
    return (
        <Container>
            <FilterNavbar />

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">

                {demoFiles.map((file, index) => (
                    <DocumentPreview
                        key={index}
                        name={file.name}
                        type={file.type}
                        sizeKB={file.sizeKB}
                    />
                ))}
            </div>



        </Container>
    )
}

export default BrowseDocuments;