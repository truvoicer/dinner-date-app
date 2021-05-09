import React from 'react';
import {Nav, Tab} from 'react-bootstrap';
import Link from "next/link";
import FullWidthSection from "../../layout/sections/FullWidthSection";
import ImageBannerBlock from "../ImageBannerBlock";
import {getComponent} from "../../../library/helpers/page-helper";

const FullTabbedBlock = (props) => {
    return (
        <FullWidthSection
            className={"profile-section padding-tb"}
        >
            <div className="member-profile">
                <ImageBannerBlock/>
                <div className="profile-details">
                    <Tab.Container id="left-tabs-example" defaultActiveKey={props.config.defaultTab}>
                        <div className="profile-nav">
                            <Nav variant="tabs">
                                {props.config.tabs.map((tab, tabIndex) => {
                                    if (Array.isArray(tab?.subs)) {
                                        return (
                                            <div key={tabIndex} className="dropdown">
                                                <a
                                                    className="btn dropdown-toggle"
                                                    href="#" role="button"
                                                    id="dropdownMenuLink"
                                                    data-bs-toggle="dropdown"
                                                    aria-expanded="false"
                                                >
                                                    {tab.label}
                                                </a>
                                                <ul
                                                    className="dropdown-menu"
                                                    aria-labelledby="dropdownMenuLink"
                                                >
                                                    {tab.subs.map((subTab, subTabIndex) => (
                                                        <li key={subTabIndex}>
                                                            <Link href={subTab.href}>
                                                                <a
                                                                    className="dropdown-item"
                                                                >
                                                                    {subTab.label}
                                                                </a>
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )
                                    }
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
                                        props: {
                                            ...props,
                                            ...(() => {
                                                return tab?.props || {};
                                            })
                                        }
                                    })}
                                </Tab.Pane>
                            ))}
                        </Tab.Content>
                    </Tab.Container>
                </div>

            </div>
        </FullWidthSection>
    );
};

export default FullTabbedBlock;
