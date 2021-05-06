import HeroBanner from "../../components/blocks/HeroBanner";
import {ROLE_ADMIN, ROLE_ANONYMOUS, ROLE_SUPER_ADMIN, ROLE_USER} from "../constants/access-control/roles-constants";
import {
    MEMBERSHIP_BRONZE,
    MEMBERSHIP_FREE,
    MEMBERSHIP_GOLD, MEMBERSHIP_PLATINUM,
    MEMBERSHIP_SILVER
} from "../constants/access-control/membership-constants";
import HomeView from "../../components/views/HomeView";
import {HOME_VIEW, PROFILE_VIEW} from "../constants/views/view-constants";
import FullTabbedBlock from "../../components/blocks/tabs/FullTabbedBlock";
import {profileTabsConfig} from "../tabs/profile-tabs-config";

export const profileViewConfig = {
    name: PROFILE_VIEW,
    component: HomeView,
    blocks: [
        {
            name: "full_tabbed_block",
            component: FullTabbedBlock,
            props: {
              config: profileTabsConfig
            },
            access_control: {
                roles: [ROLE_ANONYMOUS, ROLE_USER, ROLE_ADMIN, ROLE_SUPER_ADMIN],
                memberships: [MEMBERSHIP_FREE, MEMBERSHIP_BRONZE, MEMBERSHIP_SILVER, MEMBERSHIP_GOLD, MEMBERSHIP_PLATINUM]
            }
        }
    ]
};