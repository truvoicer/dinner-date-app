import {routes} from "../../config/routes";

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