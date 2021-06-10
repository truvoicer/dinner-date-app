import React, {useEffect, useState} from 'react';
import {Nav, Tab} from 'react-bootstrap';
import {getComponent, getTabEventName, getTabEventRouterObject} from "../../../library/helpers/page-helper";
import {useRouter} from "next/router";
import {isSet} from "../../../library/helpers/utils-helper";

const PillsTabbedBlock = (props) => {
    const router = useRouter()
    const [tabEvent, setTabEvent] = useState(null);
    const [defaultTab, setDefaultTab] = useState(props.config.defaultTab);
    const tabEventName = getTabEventName(props?.config?.tabBlockName)

    useEffect(() => {
        getTabEventRouterObject(tabEvent, tabEventName, router)
    }, [tabEvent])

    useEffect(() => {
        if (isSet(router?.query[tabEventName])) {
            if (isSet(router?.query[tabEventName])) {
                setDefaultTab(router?.query[tabEventName])
            }
        }
    }, [router.query]);
    return (
        <div>
            <div className="row">
                <div className="col-xl-12">
                    <article>
                        <Tab.Container id="left-tabs-example" defaultActiveKey={defaultTab} activeKey={defaultTab} mountOnEnter={true} unmountOnExit={true}>
                            <div className="media-wrapper">
                                <Nav variant="tabs">
                                    {props.config.tabs.map((tab, tabIndex) => {
                                        return (
                                            <Nav.Item
                                                key={tabIndex}
                                            >
                                                <Nav.Link
                                                    eventKey={tab.name}
                                                    onSelect={(eventKey => {
                                                        setTabEvent(eventKey)
                                                    })}
                                                >
                                                    {tab.label}
                                                </Nav.Link>
                                            </Nav.Item>
                                        )
                                    })}
                                </Nav>
                                <Tab.Content>
                                    {props.config.tabs.map((tab, tabIndex) => (
                                        <Tab.Pane
                                            id={tab.name}
                                            className="fade"
                                            key={tabIndex}
                                            eventKey={tab.name}
                                        >

                                            {getComponent({
                                                component: tab.component,
                                                props: {
                                                    ...tab?.props,
                                                    ...{
                                                        parentTabEventName: tabEventName,
                                                        rootTabEventName: props?.rootTabEventName
                                                    }
                                                }
                                            })}

                                        </Tab.Pane>
                                    ))}
                                </Tab.Content>
                            </div>
                        </Tab.Container>
                    </article>
                </div>
            </div>
        </div>
    );
};

export default PillsTabbedBlock;
