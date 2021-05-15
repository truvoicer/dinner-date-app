import {ROLE_ANONYMOUS} from "../../config/constants/access-control/roles-constants";
import AuthLoginFormBlock from "../../components/blocks/auth/AuthLoginFormBlock";
import React from "react";
import store from "../redux/store";
import {SESSION_STATE_KEY, SESSION_USER} from "../redux/constants/session-constants";

export const isPermissionAllowed = ({permissions, allowedPermissions}) => {
    return permissions.some(permission => {
        return allowedPermissions.includes(permission)
    })
}
export const isAnonymousAccessAllowed = ({accessControlConfig}) => {
    if (!accessControlConfig) {
        return false;
    }
    return (accessControlConfig.roles.includes(ROLE_ANONYMOUS));
}
export const accessControlChecker = ({accessControlConfig, user}) => {
    if (!Array.isArray(user?.roles)) {
        return false;
    }
    if (!Array.isArray(accessControlConfig?.roles)) {
        return false;
    }
    if (!Array.isArray(accessControlConfig?.memberships)) {
        return false;
    }
    return isPermissionAllowed({
        permissions: [
            ...user.roles,
            ...(user?.user_memberships)
                ?
                user.user_memberships.map(membership => membership.membership.name)
                :
                []
        ],
        allowedPermissions: [
            ...accessControlConfig.roles,
            ...accessControlConfig.memberships
        ]
    });


}
export const showLoginModal = (globalContext) => {
    globalContext.showModal({
        name: "login_form",
        component: (<AuthLoginFormBlock/>),
        size: "md"
    })
}

export const accessControlIterator = (array) => {
    const sessionUser = store.getState()[SESSION_STATE_KEY][SESSION_USER];
    return array.map((item, index) => {
        if (accessControlChecker({
            accessControlConfig: item?.access_control,
            user: sessionUser
        })) {
            return item;
        }
        return null;
    })
}