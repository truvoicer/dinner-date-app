export const isPermissionAllowed = ({permissions, allowedPermissions}) => {
    return permissions.some(permission => {
        return allowedPermissions.includes(permission)
    })
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
    if (
        !isPermissionAllowed({
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
        })
    ) {
        return false;
    }
    return true;

}