import React, {useContext} from 'react';
import {useFormikContext} from "formik";
import FileUploadField from "../upload/FileUpload/FileUploadField";
import {imageFileUploadHandler} from "../../../library/api/helpers/media-helpers";
import {
    MODAL_COMPONENT,
    MODAL_DIALOG_CLASSES,
    MODAL_NAME,
    MODAL_SIZE
} from "../../layout/layouts/global/objects/modal-object";
import CollectionForm from "../collection/CollectionForm";
import {GlobalContext} from "../../contexts/GlobalContext";

const MediaControlsForm = ({collectionName}) => {
    const {submitForm, values, setFieldValue} = useFormikContext();
    const globalContext = useContext(GlobalContext);
    return (

        <ul className="media-upload">
            <li className="upload-now">
                <FileUploadField
                    name={"media_photo"}
                    callback={imageFileUploadHandler}
                    acceptedFilesMessage={"Accepted"}
                    allowedFileTypes={[
                        {mime_type: "image/jpeg"},
                        {mime_type: "image/png"},
                        {mime_type: "image/jpg"}
                    ]}
                    showDropzone={true}
                >
                    <div className="custom-upload">
                        <div className="file-btn">
                            <i className="icofont-upload-alt"/>
                            Upload
                        </div>
                    </div>
                </FileUploadField>
            </li>
            <li className="upload-now">
                <a
                    onClick={e => {
                        e.preventDefault();
                        setFieldValue("show_checkboxes", !values.show_checkboxes)
                    }}
                >
                    <div className="custom-upload">
                        Select Photos
                    </div>
                </a>
            </li>
            {values.show_checkboxes &&
            <>
                <li className="upload-now">
                    <a
                        onClick={e => {
                            submitForm().then(r => {
                                globalContext.showModal({
                                    [MODAL_NAME]: "new_album",
                                    [MODAL_DIALOG_CLASSES]: "modal-list-dialog",
                                    [MODAL_COMPONENT]: (
                                        <CollectionForm
                                            collectionName={collectionName}
                                            files={values.files}
                                            onSuccess={(values) => {
                                                console.log(values)
                                            }}
                                        />
                                    ),
                                    [MODAL_SIZE]: "sm"
                                })
                            })
                        }}
                    >
                        <div className="custom-upload">
                            Add to playlist
                        </div>
                    </a>
                </li>
                <li className="upload-now">
                    <a
                        onClick={e => {
                            console.log("del")
                        }}
                    >
                        <div className="custom-upload">
                            Delete
                        </div>
                    </a>
                </li>
            </>
            }
        </ul>
    );
};

export default MediaControlsForm;
