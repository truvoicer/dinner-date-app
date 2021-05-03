import {homeViewConfig} from "../../config/views/home-view-config";
import {routes} from "../../config/routes";
import {isNotEmpty} from "./utils-helper";
import {route} from "next/dist/next-server/server/router";

export const getViewBlocksConfig = (pageName) => {
    const getRoute = getRouteItem(pageName);
    if (!isNotEmpty(getRoute?.blocksConfig)) {
        return [];
    }
    return getRoute.blocksConfig;
}
export const getComponent = (component) => {
    const Component = component;
    return <Component />
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