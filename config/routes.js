import {homeViewConfig} from "./views/home-view-config";
import {loginViewConfig} from "./views/login-view-config";
import {signUpViewConfig} from "./views/signup-view-config";
import {
    ACCOUNT_SETTINGS_VIEW,
    ACCOUNT_VIEW,
    ALL_MEMBERS_VIEW, BLOG_VIEW,
    COMMUNITY_VIEW, GALLERY_VIEW,
    HOME_VIEW, LOGIN_VIEW, LOGOUT_VIEW, MEMBER_PROFILE_VIEW,
    MEMBERS_VIEW, PROFILE_VIEW,
    SEARCH_MEMBERS_VIEW, SIGNUP_VIEW
} from "./constants/views/view-constants";
import {ROLE_ADMIN, ROLE_ANONYMOUS, ROLE_SUPER_ADMIN, ROLE_USER} from "./constants/access-control/roles-constants";
import {
    MEMBERSHIP_BRONZE,
    MEMBERSHIP_FREE,
    MEMBERSHIP_GOLD, MEMBERSHIP_PLATINUM,
    MEMBERSHIP_SILVER
} from "./constants/access-control/membership-constants";
import {editProfileViewConfig} from "./views/edit-profile-view-config";
import {logout} from "../library/api/session";
import {sessionLogoutHandler} from "../library/redux/actions/session-actions";
import {getRouteItem} from "../library/helpers/page-helper";
import {memberListViewConfig} from "./views/member-list-view-config";
import {viewProfileViewConfig} from "./views/view-profile-view-config";

export const routes = [
    {
        name: HOME_VIEW,
        label: "Home",
        href: "/",
        showInHeader: true,
        viewConfig: homeViewConfig,
        access_control: {
            roles: [ROLE_ANONYMOUS, ROLE_USER, ROLE_ADMIN, ROLE_SUPER_ADMIN],
            memberships: [MEMBERSHIP_FREE, MEMBERSHIP_BRONZE, MEMBERSHIP_SILVER, MEMBERSHIP_GOLD, MEMBERSHIP_PLATINUM]
        }
    },
    {
        name: MEMBERS_VIEW,
        label: "Members",
        href: "/members",
        showInHeader: true,
        viewConfig: memberListViewConfig,
        access_control: {
            roles: [ROLE_USER, ROLE_ADMIN, ROLE_SUPER_ADMIN],
            memberships: [MEMBERSHIP_FREE, MEMBERSHIP_BRONZE, MEMBERSHIP_SILVER, MEMBERSHIP_GOLD, MEMBERSHIP_PLATINUM]
        },
        subRoutes: [
            {
                name: SEARCH_MEMBERS_VIEW,
                label: "Search Members",
                href: "/members/search",
                showInHeader: true,
                access_control: {
                    roles: [ROLE_USER, ROLE_ADMIN, ROLE_SUPER_ADMIN],
                    memberships: [MEMBERSHIP_FREE, MEMBERSHIP_BRONZE, MEMBERSHIP_SILVER, MEMBERSHIP_GOLD, MEMBERSHIP_PLATINUM]
                }
            },
            {
                name: ALL_MEMBERS_VIEW,
                label: "All Members",
                href: "/members/list",
                showInHeader: true,
                viewConfig: memberListViewConfig,
                access_control: {
                    roles: [ROLE_USER, ROLE_ADMIN, ROLE_SUPER_ADMIN],
                    memberships: [MEMBERSHIP_FREE, MEMBERSHIP_BRONZE, MEMBERSHIP_SILVER, MEMBERSHIP_GOLD, MEMBERSHIP_PLATINUM]
                }
            },
            {
                name: MEMBER_PROFILE_VIEW,
                label: "All Members",
                href: "/members/profile/%s",
                showInHeader: false,
                viewConfig: viewProfileViewConfig,
                access_control: {
                    roles: [ROLE_USER, ROLE_ADMIN, ROLE_SUPER_ADMIN],
                    memberships: [MEMBERSHIP_FREE, MEMBERSHIP_BRONZE, MEMBERSHIP_SILVER, MEMBERSHIP_GOLD, MEMBERSHIP_PLATINUM]
                }
            },
        ]
    },
    {
        name: COMMUNITY_VIEW,
        label: "Community",
        href: "/community",
        showInHeader: true,
        access_control: {
            roles: [ROLE_ANONYMOUS, ROLE_USER, ROLE_ADMIN, ROLE_SUPER_ADMIN],
            memberships: [MEMBERSHIP_FREE, MEMBERSHIP_BRONZE, MEMBERSHIP_SILVER, MEMBERSHIP_GOLD, MEMBERSHIP_PLATINUM]
        },
        subRoutes: [
            {
                name: BLOG_VIEW,
                label: "Blog",
                href: "/community/blog",
                showInHeader: true,
                access_control: {
                    roles: [ROLE_ANONYMOUS, ROLE_USER, ROLE_ADMIN, ROLE_SUPER_ADMIN],
                    memberships: [MEMBERSHIP_FREE, MEMBERSHIP_BRONZE, MEMBERSHIP_SILVER, MEMBERSHIP_GOLD, MEMBERSHIP_PLATINUM]
                }
            },
        ]
    },
    {
        name: ACCOUNT_VIEW,
        label: "Account",
        href: "/account",
        showInHeader: true,
        viewConfig: loginViewConfig,
        override: (router, globalContext, event) => {
            event.preventDefault()
        },
        access_control: {
            roles: [ROLE_USER, ROLE_ADMIN, ROLE_SUPER_ADMIN],
            memberships: [MEMBERSHIP_FREE, MEMBERSHIP_BRONZE, MEMBERSHIP_SILVER, MEMBERSHIP_GOLD, MEMBERSHIP_PLATINUM]
        },
        subRoutes: [
            {
                name: PROFILE_VIEW,
                label: "Profile",
                href: "/profile",
                showInHeader: true,
                viewConfig: editProfileViewConfig,
                access_control: {
                    roles: [ROLE_USER, ROLE_ADMIN, ROLE_SUPER_ADMIN],
                    memberships: [MEMBERSHIP_FREE, MEMBERSHIP_BRONZE, MEMBERSHIP_SILVER, MEMBERSHIP_GOLD, MEMBERSHIP_PLATINUM]
                }
            },
            {
                name: ACCOUNT_SETTINGS_VIEW,
                label: "Settings",
                href: "/account/settings",
                showInHeader: true,
                viewConfig: loginViewConfig,
                access_control: {
                    roles: [ROLE_USER, ROLE_ADMIN, ROLE_SUPER_ADMIN],
                    memberships: [MEMBERSHIP_FREE, MEMBERSHIP_BRONZE, MEMBERSHIP_SILVER, MEMBERSHIP_GOLD, MEMBERSHIP_PLATINUM]
                }
            },
            {
                name: LOGOUT_VIEW,
                label: "Logout",
                href: "/account/logout",
                showInHeader: true,
                override: (router, globalContext, event) => {
                    sessionLogoutHandler();
                    router.replace(getRouteItem(LOGIN_VIEW).href)
                },
                access_control: {
                    roles: [ROLE_USER, ROLE_ADMIN, ROLE_SUPER_ADMIN],
                    memberships: [MEMBERSHIP_FREE, MEMBERSHIP_BRONZE, MEMBERSHIP_SILVER, MEMBERSHIP_GOLD, MEMBERSHIP_PLATINUM]
                }
            },
        ]
    },
    {
        name: LOGIN_VIEW,
        label: "Login",
        href: "/login",
        showInHeader: false,
        viewConfig: loginViewConfig,
        access_control: {
            roles: [ROLE_ANONYMOUS, ROLE_USER, ROLE_ADMIN, ROLE_SUPER_ADMIN],
            memberships: [MEMBERSHIP_FREE, MEMBERSHIP_BRONZE, MEMBERSHIP_SILVER, MEMBERSHIP_GOLD, MEMBERSHIP_PLATINUM]
        }
    },
    {
        name: SIGNUP_VIEW,
        label: "Sign Up",
        href: "/signup",
        showInHeader: false,
        viewConfig: signUpViewConfig,
        access_control: {
            roles: [ROLE_ANONYMOUS, ROLE_USER, ROLE_ADMIN, ROLE_SUPER_ADMIN],
            memberships: [MEMBERSHIP_FREE, MEMBERSHIP_BRONZE, MEMBERSHIP_SILVER, MEMBERSHIP_GOLD, MEMBERSHIP_PLATINUM]
        }
    },
    {
        name: GALLERY_VIEW,
        label: "Gallery",
        href: "/profile/gallery",
        showInHeader: false,
        viewConfig: editProfileViewConfig,
        access_control: {
            roles: [ROLE_USER, ROLE_ADMIN, ROLE_SUPER_ADMIN],
            memberships: [MEMBERSHIP_FREE, MEMBERSHIP_BRONZE, MEMBERSHIP_SILVER, MEMBERSHIP_GOLD, MEMBERSHIP_PLATINUM]
        }
    },
];