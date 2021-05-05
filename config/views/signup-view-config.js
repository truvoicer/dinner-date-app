import PageHeaderBlock from "../../components/blocks/PageHeaderBlock";
import AuthSignUpFormBlock from "../../components/blocks/auth/AuthSignUpFormBlock";
import {ROLE_ADMIN, ROLE_ANONYMOUS, ROLE_SUPER_ADMIN, ROLE_USER} from "../constants/access-control/roles-constants";
import {
    MEMBERSHIP_BRONZE,
    MEMBERSHIP_FREE,
    MEMBERSHIP_GOLD, MEMBERSHIP_PLATINUM,
    MEMBERSHIP_SILVER
} from "../constants/access-control/membership-constants";
import HomeView from "../../components/views/HomeView";
import {SIGNUP_VIEW} from "../constants/views/view-constants";

export const signUpViewConfig = {
    name: SIGNUP_VIEW,
    component: HomeView,
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
            name: "auth_signup_form_block",
            component: AuthSignUpFormBlock,
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