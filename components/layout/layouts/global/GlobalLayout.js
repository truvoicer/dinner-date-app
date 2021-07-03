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
    MODAL_SIZE,
    modalObject
} from "./objects/modal-object";

import {
    CHOICE_MODAL_DIALOG_CLASSES,
    CHOICE_MODAL_SHOW,
    CHOICE_MODAL_CONTENT_CLASSES,
    choiceModalObject,
    CHOICE_MODAL_BUTTONS,
    CHOICE_MODAL_BUTTON_CLOSE,
    CHOICE_MODAL_BUTTON_CALLBACK,
    CHOICE_MODAL_BUTTON_TEXT,
    CHOICE_MODAL_BUTTON_CALLBACK_PROPS,
    CHOICE_MODAL_DESCRIPTION,
    CHOICE_MODAL_TITLE,
    CHOICE_MODAL_BUTTON_VARIANT, CHOICE_MODAL_CONFIRM_CALLBACK, CHOICE_MODAL_CANCEL_CALLBACK
} from "./objects/choice-modal-object";
import {isNotEmpty} from "../../../../library/helpers/utils-helper";

const GlobalLayout = ({children}) => {
    const router = useRouter();
    const [modalComponents, setModalComponents] = useState([]);
    const [choiceModal, setChoiceModal] = useState(choiceModalObject);

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

    const showChoiceModal = (object) => {
        setChoiceModal(choiceModal => {
            const cloneChoiceModal = {...choiceModal};
            object[CHOICE_MODAL_SHOW] = true;
            return {...cloneChoiceModal, ...object};
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

    const closeChoiceModal = () => {
        setChoiceModal(choiceModal => {
            const cloneChoiceModal = {...choiceModal};
            cloneChoiceModal[CHOICE_MODAL_SHOW] = false;
            return cloneChoiceModal;
        })
    }

    const [globalContext] = useState({
        showModal: showModal,
        closeModal: closeModal,
        showChoiceModal: showChoiceModal,
        closeChoiceModal: closeChoiceModal
    })


    const getModalComponent = (name) => {
        const getComponent = modalComponents.find(modal => modal[MODAL_NAME] === name);
        if (!getComponent) {
            return null;
        }
        return getComponent[MODAL_COMPONENT];
    }

    const getChoiceModalVariant = (button) => {
        if (button.hasOwnProperty(CHOICE_MODAL_BUTTON_CLOSE) && button[CHOICE_MODAL_BUTTON_CLOSE]) {
            return "secondary";
        }
        if (button.hasOwnProperty(CHOICE_MODAL_BUTTON_VARIANT) && isNotEmpty(button[CHOICE_MODAL_BUTTON_VARIANT])) {
            return button[CHOICE_MODAL_BUTTON_VARIANT];
        }
        return "primary";
    }

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
                <Modal
                    show={choiceModal[CHOICE_MODAL_SHOW]}
                    className={"global-choice-modal"}
                    contentClassName={`global-choice-modal--content ${choiceModal[CHOICE_MODAL_CONTENT_CLASSES]}`}
                    dialogClassName={`global-choice-modal--dialog ${choiceModal[CHOICE_MODAL_DIALOG_CLASSES]}`}
                    onHide={() => {
                        closeChoiceModal()
                    }}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>{choiceModal[CHOICE_MODAL_TITLE]}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {choiceModal[CHOICE_MODAL_DESCRIPTION]}
                    </Modal.Body>
                    <Modal.Footer>
                        {choiceModal[CHOICE_MODAL_BUTTONS].map((button, index) => (
                            <Button
                                variant={getChoiceModalVariant(button)}
                                onClick={() => {
                                    if (button.hasOwnProperty(CHOICE_MODAL_BUTTON_CLOSE) && button[CHOICE_MODAL_BUTTON_CLOSE]) {
                                        if (choiceModal.hasOwnProperty(CHOICE_MODAL_CANCEL_CALLBACK) && choiceModal[CHOICE_MODAL_CANCEL_CALLBACK] instanceof Function) {
                                            choiceModal[CHOICE_MODAL_CANCEL_CALLBACK]();
                                        } else {
                                            closeChoiceModal();
                                        }
                                        return;
                                    }
                                    if (button.hasOwnProperty(CHOICE_MODAL_BUTTON_CALLBACK) && button[CHOICE_MODAL_BUTTON_CALLBACK] instanceof Function) {
                                        button[CHOICE_MODAL_BUTTON_CALLBACK](button[CHOICE_MODAL_BUTTON_CALLBACK_PROPS]);
                                    } else if (choiceModal.hasOwnProperty(CHOICE_MODAL_CONFIRM_CALLBACK) && choiceModal[CHOICE_MODAL_CONFIRM_CALLBACK] instanceof Function) {
                                        choiceModal[CHOICE_MODAL_CONFIRM_CALLBACK](choiceModal[CHOICE_MODAL_BUTTON_CALLBACK_PROPS]);
                                    } else {
                                        console.warn(`Button [${button[CHOICE_MODAL_BUTTON_TEXT]}] has no callback`)
                                    }
                                }}
                            >
                                {button[CHOICE_MODAL_BUTTON_TEXT]}
                            </Button>
                        ))}
                    </Modal.Footer>
                </Modal>
        </GlobalContext.Provider>
    );
};
export default GlobalLayout
