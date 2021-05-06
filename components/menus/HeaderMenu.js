import React from 'react';
import Link from "next/link";
import {routes} from "../../config/routes";
import {isSet} from "../../library/helpers/utils-helper";
import {useRouter} from "next/router";

const HeaderMenu = () => {
    const router = useRouter();

    const getLinkItem = (route) => {
        if (isSet(route?.override) && typeof route.override === "function") {
            return (
                <a
                    style={{cursor: "pointer"}}
                    onClick={event => {
                        event.preventDefault();
                        route.override(router, event);
                    }}
                >
                    {route.label}
                </a>
            )
        } else {
            return (
                <Link href={route.href}>
                    <a>{route.label}</a>
                </Link>
            );
        }
    }
    return (
        <ul className="menu">
            {routes.map((route, routeIndex) => (
                <React.Fragment key={routeIndex}>
                    {route?.showInHeader &&
                    <li key={routeIndex}>
                        {getLinkItem(route)}
                        {route?.subRoutes &&
                        <ul className="submenu">
                            {route.subRoutes.map((subRoute, subRouteIndex) => (
                                <React.Fragment key={subRouteIndex}>
                                    {subRoute?.showInHeader &&
                                    <li key={subRouteIndex}>
                                        {getLinkItem(subRoute)}
                                    </li>
                                    }
                                </React.Fragment>
                            ))}
                        </ul>
                        }
                    </li>
                    }
                </React.Fragment>
            ))}
        </ul>
    );
}
;

export default HeaderMenu;
