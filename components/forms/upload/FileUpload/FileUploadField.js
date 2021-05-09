import React, {useState} from 'react';
import {useFormikContext} from "formik";
import {useDropzone} from "react-dropzone";
import {
    getAcceptedFileExtString,
    getAcceptedMimeTypesString,
    isNotEmpty
} from "../../../../library/helpers/utils-helper";

function FileUploadField({
                             name,
                             showDropzone = true,
                             dropzoneMessage = null,
                             acceptedFilesMessage = null,
                             callback,
                             value = null,
                             allowedFileTypes = null,
                             children
                         }) {

    const [, setUploadedFile] = useState({});

    const onSelectFile = (acceptedFiles) => {
        const getFiles = acceptedFiles.map(file => Object.assign(file, {
            preview: URL.createObjectURL(file)
        }));
        const getFile = getFiles.length > 0 ? getFiles[0] : {};
        setUploadedFile(getFile);
        callback({name: name, file: getFile})
    };

    const {getRootProps, getInputProps, open} = useDropzone({
        accept: getAcceptedMimeTypesString(allowedFileTypes),
        maxFiles: 1,
        onDrop: onSelectFile
    });
    return (
        <div {...getRootProps({className: 'dropzone'})}>
            {showDropzone
                ?
                <div className={"dropzone-area"}>
                    <input {...getInputProps()} />
                    {children}
                    {dropzoneMessage &&
                    <p>{dropzoneMessage}</p>
                    }
                </div>
                :
                <>
                    <input {...getInputProps()} />
                    <button type="button" onClick={open}>
                        Browse
                    </button>
                </>
            }
        </div>
    );
}

export default FileUploadField;