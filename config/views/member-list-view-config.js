import {ROLE_ADMIN, ROLE_ANONYMOUS, ROLE_SUPER_ADMIN, ROLE_USER} from "../constants/access-control/roles-constants";
import {
    MEMBERSHIP_BRONZE,
    MEMBERSHIP_GOLD, MEMBERSHIP_PLATINUM,
    MEMBERSHIP_SILVER
} from "../constants/access-control/membership-constants";
import {ALL_MEMBERS_VIEW, HOME_VIEW} from "../constants/views/view-constants";
import MemberListBlock from "../../components/blocks/members/MemberListBLock";
import PageHeaderBlock from "../../components/blocks/PageHeaderBlock";

export const memberListViewConfig = {
    name: ALL_MEMBERS_VIEW,
    blocks: [
        {
            name: "page_header_block",
            component: PageHeaderBlock,
            props: {
                title: "All Members"
            },
            access_control: {
                roles: [ROLE_USER, ROLE_ADMIN, ROLE_SUPER_ADMIN],
                memberships: [MEMBERSHIP_BRONZE, MEMBERSHIP_SILVER, MEMBERSHIP_GOLD, MEMBERSHIP_PLATINUM]
            }
        },
        {
            name: "member_list_block",
            component: MemberListBlock,
            access_control: {
                roles: [ROLE_USER, ROLE_ADMIN, ROLE_SUPER_ADMIN],
                memberships: [MEMBERSHIP_BRONZE, MEMBERSHIP_SILVER, MEMBERSHIP_GOLD, MEMBERSHIP_PLATINUM]
            }
        },
    ]
};