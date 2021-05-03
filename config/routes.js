import {homeViewConfig} from "./views/home-view-config";
import {loginViewConfig} from "./views/login-view-config";
import {signUpViewConfig} from "./views/signup-view-config";
import {
    ACCOUNT_VIEW,
    ALL_MEMBERS_VIEW, BLOG_VIEW,
    COMMUNITY_VIEW,
    HOME_VIEW, LOGIN_VIEW,
    MEMBERS_VIEW, PROFILE_VIEW,
    SEARCH_MEMBERS_VIEW, SIGNUP_VIEW
} from "./views/constants/view-constants";

export const routes = [
    {
        name: HOME_VIEW,
        label: "Home",
        href: "/",
        showInHeader: true,
        blocksConfig: homeViewConfig
    },
    {
        name: MEMBERS_VIEW,
        label: "Members",
        href: "/members",
        showInHeader: true,
        subRoutes: [
            {
                name: SEARCH_MEMBERS_VIEW,
                label: "Search Members",
                href: "/members/search",
                showInHeader: true,
            },
            {
                name: ALL_MEMBERS_VIEW,
                label: "All Members",
                href: "/members/list",
                showInHeader: true,
            },
        ]
    },
    {
        name: COMMUNITY_VIEW,
        label: "Community",
        href: "/community",
        showInHeader: true,
        subRoutes: [
            {
                name: BLOG_VIEW,
                label: "Blog",
                href: "/community/blog",
                showInHeader: true,
            },
        ]
    },
    {
        name: ACCOUNT_VIEW,
        label: "Account",
        href: "/account",
        showInHeader: true,
        subRoutes: [
            {
                name: PROFILE_VIEW,
                label: "Profile",
                href: "/account/profile",
                showInHeader: true,
            },
        ]
    },
    {
        name: LOGIN_VIEW,
        label: "Login",
        href: "/login",
        showInHeader: false,
        blocksConfig: loginViewConfig
    },
    {
        name: SIGNUP_VIEW,
        label: "Sign Up",
        href: "/signup",
        showInHeader: false,
        blocksConfig: signUpViewConfig
    },
];