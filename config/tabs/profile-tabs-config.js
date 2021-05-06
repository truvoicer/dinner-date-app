import ProfileForm from "../../components/forms/ProfileForm";

export const profileTabsConfig = {
    defaultTab: "profile",
    tabs: [
        {
            name: "profile",
            label: "Profile",
            component: ProfileForm
        }
    ]
}