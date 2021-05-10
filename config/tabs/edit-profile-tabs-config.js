import EditProfileBlock from "../../components/blocks/profile/EditProfileBlock";

export const editProfileTabsConfig = {
    defaultTab: "profile",
    tabs: [
        {
            name: "profile",
            label: "Profile",
            component: EditProfileBlock
        },
    ]
}