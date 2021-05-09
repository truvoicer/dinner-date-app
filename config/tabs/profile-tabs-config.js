import ProfileForm from "../../components/blocks/profile/ProfileBlock";

export const profileTabsConfig = {
    defaultTab: "profile",
    tabs: [
        {
            name: "profile",
            label: "Profile",
            component: ProfileForm
        },
    ]
}