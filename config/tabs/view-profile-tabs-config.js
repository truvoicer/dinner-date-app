import ViewProfileBlock from "../../components/blocks/profile/ViewProfileBlock";

export const viewProfileTabsConfig = {
    defaultTab: "profile",
    tabBlockName: "profile",
    tabs: [
        {
            name: "profile",
            label: "Profile",
            component: ViewProfileBlock
        },
    ]
}