import React from "react";
import DocumentPreview from "./DocumentPreview";

const PreviewList = ({ files, onFileClick, onDelete }) => {
    return (
        files.length === 0 ? (
            <div className="min-h-[70vh] w-full flex flex-col items-center justify-center">
                <p className="font-bold text-center">
                    No files yet. Start by uploading your files.
                </p>
            </div>
        ) : (
            <div className="min-h-[70vh] w-full">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
                    {files.map((file, index) => (
                        <DocumentPreview
                            key={index}
                            name={file.name}
                            contentType={file.contentType}
                            size={file.size}
                            onClick={onFileClick}
                            onDelete={onDelete}
                        />
                    ))}
                </div>
            </div>

        )
    );
}

export default PreviewList;
