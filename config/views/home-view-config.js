import HeroBanner from "../../components/blocks/HeroBanner";
import {ROLE_ADMIN, ROLE_ANONYMOUS, ROLE_SUPER_ADMIN, ROLE_USER} from "../constants/access-control/roles-constants";
import {
    MEMBERSHIP_BRONZE,
    MEMBERSHIP_FREE,
    MEMBERSHIP_GOLD, MEMBERSHIP_PLATINUM,
    MEMBERSHIP_SILVER
} from "../constants/access-control/membership-constants";
import {HOME_VIEW} from "../constants/views/view-constants";

export const homeViewConfig = {
    name: HOME_VIEW,
    blocks: [
        {
            name: "hero_banner",
            component: HeroBanner,
            access_control: {
                roles: [ROLE_ANONYMOUS, ROLE_USER, ROLE_ADMIN, ROLE_SUPER_ADMIN],
                memberships: [MEMBERSHIP_FREE, MEMBERSHIP_BRONZE, MEMBERSHIP_SILVER, MEMBERSHIP_GOLD, MEMBERSHIP_PLATINUM]
            }
        }
    ]
};