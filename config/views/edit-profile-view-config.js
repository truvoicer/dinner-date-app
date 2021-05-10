import {ROLE_ADMIN, ROLE_ANONYMOUS, ROLE_SUPER_ADMIN, ROLE_USER} from "../constants/access-control/roles-constants";
import {
    MEMBERSHIP_BRONZE,
    MEMBERSHIP_FREE,
    MEMBERSHIP_GOLD, MEMBERSHIP_PLATINUM,
    MEMBERSHIP_SILVER
} from "../constants/access-control/membership-constants";
import {HOME_VIEW, PROFILE_VIEW} from "../constants/views/view-constants";
import FullTabbedBlock from "../../components/blocks/tabs/FullTabbedBlock";
import {editProfileTabsConfig} from "../tabs/edit-profile-tabs-config";
import PageHeaderBlock from "../../components/blocks/PageHeaderBlock";
import EditProfileBannerBlock from "../../components/blocks/profile/EditProfileBannerBlock";

export const editProfileViewConfig = {
    name: PROFILE_VIEW,
    blocks: [
        {
            name: "page_header_block",
            component: PageHeaderBlock,
            props: {
                title: "Profile"
            },
            access_control: {
                roles: [ROLE_USER, ROLE_ADMIN, ROLE_SUPER_ADMIN],
                memberships: [MEMBERSHIP_BRONZE, MEMBERSHIP_SILVER, MEMBERSHIP_GOLD, MEMBERSHIP_PLATINUM]
            }
        },
        {
            name: "full_tabbed_block",
            component: FullTabbedBlock,
            props: {
                config: editProfileTabsConfig,
                headerComponent: EditProfileBannerBlock
            },
            access_control: {
                roles: [ROLE_ANONYMOUS, ROLE_USER, ROLE_ADMIN, ROLE_SUPER_ADMIN],
                memberships: [MEMBERSHIP_FREE, MEMBERSHIP_BRONZE, MEMBERSHIP_SILVER, MEMBERSHIP_GOLD, MEMBERSHIP_PLATINUM]
            }
        }
    ]
};