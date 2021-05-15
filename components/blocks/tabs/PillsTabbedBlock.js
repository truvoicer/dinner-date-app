import React from 'react';
import {Nav, Tab} from 'react-bootstrap';
import Link from "next/link";
import FullWidthSection from "../../layout/sections/FullWidthSection";
import EditProfileBannerBlock from "../profile/EditProfileBannerBlock";
import {getComponent} from "../../../library/helpers/page-helper";
import {isSet} from "../../../library/helpers/utils-helper";
import SearchMembersBoxWidget from "../../widgets/search/SearchMembersBoxWidget";
import SuggestedMembersBoxWidget from "../../widgets/SuggestedMembersBoxWidget";
import ActiveGroupsBoxWidget from "../../widgets/ActiveGroupsBoxWidget";

const PillsTabbedBlock = (props) => {
    return (
        <div>
            <div className="row">
                <div className="col-xl-12">
                    <article>
                        <Tab.Container id="left-tabs-example" defaultActiveKey={props.config.defaultTab}>
                            <div className="media-wrapper">
                                <Nav variant="tabs">
                                    {props.config.tabs.map((tab, tabIndex) => {
                                        return (
                                            <Nav.Item
                                                key={tabIndex}
                                            >
                                                <Nav.Link
                                                    eventKey={tab.name}
                                                >
                                                    {tab.label}
                                                </Nav.Link>
                                            </Nav.Item>
                                        )
                                    })}
                                </Nav>
                            </div>
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
                                            props: tab?.props
                                        })}

                                    </Tab.Pane>
                                ))}
                            </Tab.Content>
                        </Tab.Container>
                    </article>
                </div>
            </div>
        </div>
    );
};

export default PillsTabbedBlock;
