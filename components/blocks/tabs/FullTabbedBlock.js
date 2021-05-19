import React, {useEffect, useState} from 'react';
import {Nav, Tab} from 'react-bootstrap';
import Link from "next/link";
import FullWidthSection from "../../layout/sections/FullWidthSection";
import EditProfileBannerBlock from "../profile/EditProfileBannerBlock";
import {
    getComponent,
    getContentSidebarClasses,
    getTabEventName,
    getTabEventRouterObject
} from "../../../library/helpers/page-helper";
import {isNotEmpty, isSet} from "../../../library/helpers/utils-helper";
import SearchMembersBoxWidget from "../../widgets/search/SearchMembersBoxWidget";
import SuggestedMembersBoxWidget from "../../widgets/SuggestedMembersBoxWidget";
import ActiveGroupsBoxWidget from "../../widgets/ActiveGroupsBoxWidget";
import {useRouter} from "next/router";

const FullTabbedBlock = (props) => {
    const router = useRouter()
    const [tabEvent, setTabEvent] = useState(null);
    const [defaultTab, setDefaultTab] = useState(props.config.defaultTab);
    const tabEventName = getTabEventName(props?.config?.tabBlockName)

    useEffect(() => {
        getTabEventRouterObject(tabEvent, tabEventName, router)
    }, [tabEvent])

    useEffect(() => {
        if (isSet(router?.query[tabEventName])) {
            setDefaultTab(router?.query[tabEventName])
        }
    }, [router.query]);

    return (
        <FullWidthSection
            className={"profile-section padding-tb"}
        >
            <div className="member-profile">
                {isSet(props?.headerComponent) && getComponent({
                    component: props.headerComponent,
                    props: props
                })}
                <div className="profile-details">
                    <Tab.Container id="left-tabs-example" defaultActiveKey={defaultTab} activeKey={defaultTab}>
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
                        </div>
                        <Tab.Content>
                            {props.config.tabs.map((tab, tabIndex) => (
                                <Tab.Pane
                                    id={tab.name}
                                    className="fade"
                                    key={tabIndex}
                                    eventKey={tab.name}
                                >

                                    <div>
                                        <div className="row">
                                            <div className={getContentSidebarClasses(tab).content}>
                                                <article>
                                                    {getComponent({
                                                        component: tab.component,
                                                        props: {
                                                            ...tab?.props,
                                                            ...{rootTabEventName: tabEventName}
                                                        }
                                                    })}
                                                </article>
                                            </div>

                                            <div className={getContentSidebarClasses(tab).sidebar}>
                                                <aside className="mt-5 mt-xl-0">
                                                    <SearchMembersBoxWidget/>
                                                    <SuggestedMembersBoxWidget/>
                                                    <ActiveGroupsBoxWidget/>
                                                </aside>
                                            </div>
                                        </div>
                                    </div>
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
