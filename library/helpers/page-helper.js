import {routes} from "../../config/routes";
import {isNotEmpty, isSet} from "./utils-helper";

export const getComponent = ({component, props = {}}) => {
    if (!isNotEmpty(component)) {
        return null;
    }
    const Component = component;
    return <Component {...props}/>
}

export const getRouteItem = (pageName) => {
    return findRouteItem(routes, pageName);
}
export const findRouteItem = (items, pageName) => {
    for (let i = 0; i < items.length; i++) {
        if (items[i].name === pageName) {
            return items[i];
        }
        if (typeof items[i].subRoutes !== "undefined") {
            let sub = findRouteItem(items[i].subRoutes, pageName);
            if (typeof sub === "object") {
                return sub;
            }
        }
    }
    return false;
}
export const getTabEventName = (tabBlockName) => {
    return `${tabBlockName}_event`;
}
export const getTabEventRouterObject = (eventKey, tabBlockName, router) => {
    if (!isNotEmpty(eventKey) || !isNotEmpty(tabBlockName) || !isNotEmpty(router)) {
        return;
    }
    const url = {
        query: {
            ...router.query,
            ...{[tabBlockName]: eventKey}
        },
    };
    const as = {
        query: {
            ...router.query,
            ...{[tabBlockName]: eventKey}
        },
    };
    const options = {
        shallow: true
    }
    router.push(url, as, options)
}

export const getContentSidebarClasses = (tab) => {
    let defaultClasses = {
        content: "col-xl-8",
        sidebar: "col-xl-4"
    }
    if (!isSet(tab?.sidebar)) {
        defaultClasses.content = "col-xl-8";
        defaultClasses.sidebar = "col-xl-4";
    }
    if (!tab.sidebar) {
        defaultClasses.content = "col-xl-12";
        defaultClasses.sidebar = "d-none";
    }
    return defaultClasses;
}