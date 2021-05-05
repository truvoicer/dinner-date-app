import PageHeaderBlock from "../../components/blocks/PageHeaderBlock";
import AuthLoginFormBlock from "../../components/blocks/auth/AuthLoginFormBlock";
import {ROLE_ADMIN, ROLE_ANONYMOUS, ROLE_SUPER_ADMIN, ROLE_USER} from "../constants/access-control/roles-constants";
import {
    MEMBERSHIP_BRONZE,
    MEMBERSHIP_FREE,
    MEMBERSHIP_GOLD, MEMBERSHIP_PLATINUM,
    MEMBERSHIP_SILVER
} from "../constants/access-control/membership-constants";
import AuthLoginView from "../../components/views/auth/AuthLoginView";
import {LOGIN_VIEW} from "../constants/views/view-constants";

export const loginViewConfig = {
    name: LOGIN_VIEW,
    component: AuthLoginView,
    blocks: [
        {
            name: "page_header_block",
            component: PageHeaderBlock,
            access_control: {
                roles: [ROLE_ANONYMOUS, ROLE_USER, ROLE_ADMIN, ROLE_SUPER_ADMIN],
                memberships: [
                    MEMBERSHIP_FREE,
                    MEMBERSHIP_BRONZE,
                    MEMBERSHIP_SILVER,
                    MEMBERSHIP_GOLD,
                    MEMBERSHIP_PLATINUM
                ]
            }
        },
        {
            name: "auth_login_form_block",
            component: AuthLoginFormBlock,
            access_control: {
                roles: [ROLE_ANONYMOUS, ROLE_USER, ROLE_ADMIN, ROLE_SUPER_ADMIN],
                memberships: [
                    MEMBERSHIP_FREE,
                    MEMBERSHIP_BRONZE,
                    MEMBERSHIP_SILVER,
                    MEMBERSHIP_GOLD,
                    MEMBERSHIP_PLATINUM
                ]
            }
        },
    ]
};