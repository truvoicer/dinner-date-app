import EditProfileBlock from "../../components/blocks/profile/EditProfileBlock";
import PillsTabbedBlock from "../../components/blocks/tabs/PillsTabbedBlock";
import {editMediaTabsConfig} from "./edit-media-tabs-config";

export const editProfileTabsConfig = {
    defaultTab: "profile",
    tabs: [
        {
            name: "profile",
            label: "Profile",
            component: EditProfileBlock
        },
        {
            name: "media",
            label: "Media",
            component: PillsTabbedBlock,
            props: {
                config: editMediaTabsConfig
            }
        },
    ]
}