import EditProfileBlock from "../../components/blocks/profile/EditProfileBlock";
import PillsTabbedBlock from "../../components/blocks/tabs/PillsTabbedBlock";
import {editMediaTabsConfig} from "./edit-media-tabs-config";
import GalleryBlock from "../../components/blocks/media/GalleryBlock";

export const editProfileTabsConfig = {
    defaultTab: "profile",
    tabBlockName: "profile",
    tabs: [
        {
            name: "profile",
            label: "Profile",
            sidebar: true,
            component: EditProfileBlock
        },
        {
            name: "media",
            label: "Media",
            sidebar: true,
            component: PillsTabbedBlock,
            props: {
                config: editMediaTabsConfig
            }
        },
        {
            name: "gallery",
            label: "Gallery",
            sidebar: false,
            component: GalleryBlock,
            props: {
                config: editMediaTabsConfig
            }
        },
    ]
}