import React from 'react';
import Link from "next/link";
import {routes} from "../../config/routes";

const HeaderMenu = () => {
    return (
        <ul className="menu">
            {routes.map((route, routeIndex) => (
                <React.Fragment key={routeIndex}>
                    {route?.showInHeader &&
                    <li key={routeIndex}>
                        <Link href={route.href}>
                            <a>{route.label}</a>
                        </Link>
                        {route?.subRoutes &&
                        <ul className="submenu">
                            {route.subRoutes.map((subRoute, subRouteIndex) => (
                                <React.Fragment key={subRouteIndex}>
                                    {subRoute?.showInHeader &&
                                    <li key={subRouteIndex}>
                                        <Link href={subRoute.href}>
                                            <a>All Members</a>
                                        </Link>
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
