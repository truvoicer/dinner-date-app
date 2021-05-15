import React, {useEffect} from 'react';
import Link from "next/link";
import {routes} from "../../config/routes";
import {InternalLink} from "../Links/InternalLink";
import {accessControlIterator} from "../../library/helpers/access-control-helper";
import {connect} from "react-redux";
import {SESSION_STATE_KEY, SESSION_USER} from "../../library/redux/constants/session-constants";

const HeaderMenu = ({session}) => {
    return (
        <ul className="menu">
            {accessControlIterator(routes).map((route, routeIndex) => (
                <React.Fragment key={routeIndex}>
                    {route?.showInHeader &&
                    <li key={routeIndex}>
                        <Link href={route.href} passHref>
                            <InternalLink targetRouteConfig={route}>
                                {route.label}
                            </InternalLink>
                        </Link>
                        {route?.subRoutes &&
                        <ul className="submenu">
                            {accessControlIterator(route.subRoutes).map((subRoute, subRouteIndex) => (
                                <React.Fragment key={subRouteIndex}>
                                    {subRoute?.showInHeader &&
                                    <li key={subRouteIndex}>
                                        <Link href={subRoute.href} passHref>
                                            <InternalLink targetRouteConfig={subRoute}>
                                                {subRoute.label}
                                            </InternalLink>
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
};
export default connect(
    (state) => {
        return {
            session: state[SESSION_STATE_KEY]
        }
    },
    null
)(HeaderMenu)
