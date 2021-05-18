import React, {useEffect, useState} from 'react';
import {useRouter} from "next/router";
import {SET_SESSION_REDIRECT_PATH} from "../../../../library/redux/sagas/session/session-sagas";
import store from "../../../../library/redux/store";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import {GlobalContext} from "../../../contexts/GlobalContext";
import {
    MODAL_COMPONENT,
    MODAL_CONTENT_CLASSES, MODAL_DIALOG_CLASSES,
    MODAL_FOOTER,
    MODAL_HEADER,
    MODAL_NAME,
    MODAL_SHOW,
    MODAL_SIZE
} from "./objects/modal-object";
import {modalObject} from "./objects/modal-object";

const GlobalLayout = ({children}) => {
    const router = useRouter();
    const [modalComponents, setModalComponents] = useState([]);

    useEffect(() => {
        store.dispatch({type: SET_SESSION_REDIRECT_PATH, path: router.asPath})
    }, [router.asPath]);

    const showModal = (object) => {
        setModalComponents(modalComponents => {
            const cloneModalComponents = [...modalComponents];
            const index = cloneModalComponents.findIndex(modal => modal[MODAL_NAME] === object[MODAL_NAME]);
            if (index === -1) {
                cloneModalComponents.push({...modalObject, ...object})
            } else {
                cloneModalComponents[index] = {...modalObject, ...object};
            }
            return cloneModalComponents;
        })
    }

    const closeModal = (name) => {
        setModalComponents(modalComponents => {
            const cloneModalComponents = [...modalComponents];
            const index = cloneModalComponents.findIndex(modal => modal[MODAL_NAME] === name);
            if (index !== -1) {
                cloneModalComponents[index][MODAL_SHOW] = false;
            }
            return cloneModalComponents;
        })
    }
    const getModalComponent = (name) => {
        const getComponent = modalComponents.find(modal => modal[MODAL_NAME] === name);
        if (!getComponent) {
            return null;
        }
        return getComponent[MODAL_COMPONENT];
    }
    const [globalContext] = useState({
        showModal: showModal
    })
    return (
        <GlobalContext.Provider value={globalContext}>
                {children}
                {modalComponents.map((modal, index) => {
                    return (
                        <Modal
                            key={index}
                            show={modal[MODAL_SHOW]}
                            size={modal[MODAL_SIZE]}
                            onHide={() => {
                                closeModal(modal[MODAL_NAME])
                            }}
                            className={"global-modal"}
                            contentClassName={`global-modal--content ${modal[MODAL_CONTENT_CLASSES]}`}
                            dialogClassName={`global-modal--dialog ${modal[MODAL_DIALOG_CLASSES]}`}
                        >
                            {modal[MODAL_HEADER] &&
                            <Modal.Header closeButton>
                                <Modal.Title>{modal[MODAL_NAME]}</Modal.Title>
                            </Modal.Header>
                            }
                            <Modal.Body>{getModalComponent(modal[MODAL_NAME])}</Modal.Body>
                            {modal[MODAL_FOOTER] &&
                            <Modal.Footer>
                                <Button variant="secondary" onClick={() => {
                                    closeModal(modal[MODAL_NAME])
                                }}>
                                    Close
                                </Button>
                                <Button variant="primary" onClick={() => {
                                    console.log("save")
                                }}>
                                    Save Changes
                                </Button>
                            </Modal.Footer>
                            }
                        </Modal>
                    );
                })}
        </GlobalContext.Provider>
    );
};
export default GlobalLayout
