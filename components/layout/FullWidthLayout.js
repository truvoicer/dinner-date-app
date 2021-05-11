import React, {useEffect, useState} from 'react';
import Header from "./headers/Header";
import Footer from "./footers/Footer";
import {useRouter} from "next/router";
import {SET_SESSION_PAGE_PATH} from "../../library/redux/sagas/session/session-sagas";
import store from "../../library/redux/store";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import {GlobalContext} from "../contexts/GlobalContext";
import {SESSION_STATE_KEY} from "../../library/redux/constants/session-constants";
import {
    GLOBAL_MODAL_NAME,
    GLOBAL_MODAL_SHOW, GLOBAL_MODAL_SIZE,
    GLOBAL_MODALS,
    GLOBAL_STATE_KEY
} from "../../library/redux/constants/global-constants";
import {connect} from "react-redux";
import {closeModalAction} from "../../library/redux/actions/global-actions";

const FullLayout = ({children, global}) => {
    const router = useRouter();
    const [modalComponents, setModalComponents] = useState([]);

    useEffect(() => {
        store.dispatch({type: SET_SESSION_PAGE_PATH, path: router.asPath})
    }, [router.asPath]);

    const showModal = ({name, component}) => {
        console.log(name, component)
        setModalComponents(modalComponents => {
            const cloneModalComponents = [...modalComponents];
            const index = cloneModalComponents.findIndex(modal => modal.name === name);
            if (index === -1) {
                cloneModalComponents.push({
                    name: name,
                    component: component
                })
            } else {
                cloneModalComponents[index].component = component;
            }
            return cloneModalComponents;
        })
    }
    const getModalComponent = (name) => {
        const getComponent = modalComponents.find(modal => modal.name === name);
        if (!getComponent) {
            return null;
        }
        return getComponent.component;
    }
    const [globalContext, setGlobalContext] = useState({
        showModal: showModal
    })
    console.log(modalComponents)
    return (
        <GlobalContext.Provider value={globalContext}>
        <div className={"dinner-date-app"}>
            <Header />
            {children}
            <Footer />
            {global[GLOBAL_MODALS].map((modal, index) => {
                return (
                    <Modal
                        key={index}
                        show={modal[GLOBAL_MODAL_SHOW]}
                        size={modal[GLOBAL_MODAL_SIZE]}
                        onHide={() => {
                            closeModalAction({name: modal[GLOBAL_MODAL_NAME]})
                        }}
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>{modal[GLOBAL_MODAL_NAME]}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>{getModalComponent(modal[GLOBAL_MODAL_NAME])}</Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={() => {
                                closeModalAction({name: modal[GLOBAL_MODAL_NAME]})
                            }}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={() => {
                                console.log("save")
                            }}>
                                Save Changes
                            </Button>
                        </Modal.Footer>
                    </Modal>
                );
            })}

        </div>
        </GlobalContext.Provider>
    );
};

function mapStateToProps(state) {
    return {
        global: state[GLOBAL_STATE_KEY]
    };
}
export default connect(
    mapStateToProps,
    null
)(FullLayout);
