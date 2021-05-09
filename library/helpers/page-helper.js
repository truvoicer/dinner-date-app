import {routes} from "../../config/routes";
import {isSet} from "./utils-helper";

export const getComponent = ({component, props = {}}) => {
    if (!isSet(component)) {
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