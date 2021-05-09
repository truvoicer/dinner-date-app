import {SECTION_FIELDS_LIST, SECTION_FIELDS_SINGLE, USER_PROFILE_UPDATE} from "../editable-fields-constants";
import {getUserProfileValue} from "../../../../library/helpers/user-helper";
import EditableTextField from "../../../../components/forms/editable-fields/EditableTextField";
import EditableSelectField from "../../../../components/forms/editable-fields/EditableSelectField";
import {formatDate, calculateDateDifference, uCaseFirst} from "../../../../library/helpers/utils-helper";
import EditableDateField from "../../../../components/forms/editable-fields/EditableDateField";
import EditableTextAreaField from "../../../../components/forms/editable-fields/EditableTextAreaField";
import moment from "moment";
import EditableMeasurementField from "../../../../components/forms/editable-fields/EditableMeasurementField";

export const profileFormFieldList = (targetUser) => {
    return [
        {
            title: "Base Info",
            sectionType: SECTION_FIELDS_LIST,
            sections: [
                {
                    label: "First Name",
                    className: "info-details",
                    configName: USER_PROFILE_UPDATE,
                    field: "first_name",
                    value: getUserProfileValue("first_name", targetUser),
                    fieldComponent: EditableTextField
                },
                {
                    label: "Last Name",
                    className: "info-details",
                    configName: USER_PROFILE_UPDATE,
                    field: "last_name",
                    value: getUserProfileValue("last_name", targetUser),
                    fieldComponent: EditableTextField
                },
                {
                    label: "I'm a",
                    className: "info-details",
                    configName: USER_PROFILE_UPDATE,
                    field: "gender",
                    value: uCaseFirst(getUserProfileValue("gender", targetUser)),
                    fieldComponent: EditableSelectField,
                    options: [
                        {value: "male", label: "Man"},
                        {value: "female", label: "Woman"},
                        {value: "other", label: "Other"},
                        {value: "not_specified", label: "Rather not say"}
                    ]
                },
                {
                    label: "Looking for a",
                    className: "info-details",
                    configName: USER_PROFILE_UPDATE,
                    field: "gender_preference",
                    value: uCaseFirst(getUserProfileValue("gender_preference", targetUser)),
                    fieldComponent: EditableSelectField,
                    options: [
                        {value: "male", label: "Man"},
                        {value: "female", label: "Woman"},
                        {value: "both", label: "Either"},
                        {value: "not_specified", label: "Rather not say"},
                    ]
                },
                {
                    label: "Marital Status",
                    className: "info-details",
                    configName: USER_PROFILE_UPDATE,
                    field: "marital_status",
                    value: uCaseFirst(getUserProfileValue("marital_status", targetUser)),
                    fieldComponent: EditableSelectField,
                    options: [
                        {value: "single", label: "Single"},
                        {value: "married", label: "Married"},
                        {value: "widowed", label: "Widowed"},
                        {value: "separated", label: "Separated"},
                        {value: "divorced", label: "Divorced"}
                    ]
                },
                {
                    label: "Age",
                    className: "info-details",
                    value: calculateDateDifference(getUserProfileValue("dob", targetUser)),
                },
                {
                    label: "Date of Birth",
                    className: "info-details",
                    configName: USER_PROFILE_UPDATE,
                    field: "dob",
                    value: getUserProfileValue("dob", targetUser),
                    fieldComponent: EditableDateField
                },
                {
                    label: "Address",
                    className: "info-details",
                    configName: USER_PROFILE_UPDATE,
                    field: "address",
                    value: getUserProfileValue("address", targetUser),
                    fieldComponent: EditableTextField
                },
            ]
        },
        {
            title: "Myself Summary",
            sectionType: SECTION_FIELDS_SINGLE,
            sections: [
                {
                    label: "Summary",
                    className: "info-details",
                    configName: USER_PROFILE_UPDATE,
                    fullWidth: true,
                    field: "summary",
                    value: getUserProfileValue("summary", targetUser),
                    fieldComponent: EditableTextAreaField
                },
            ]
        },
        {
            title: "Looking For",
            sectionType: SECTION_FIELDS_LIST,
            sections: [
                {
                    label: "Things I'm looking for",
                    className: "info-details",
                    configName: USER_PROFILE_UPDATE,
                    field: "partner_qualities",
                    value: getUserProfileValue("partner_qualities", targetUser),
                    fieldComponent: EditableTextField
                },
                {
                    label: "Smoking Preference",
                    className: "info-details",
                    configName: USER_PROFILE_UPDATE,
                    field: "smoking_preference",
                    value: uCaseFirst(getUserProfileValue("smoking_preference", targetUser)),
                    fieldComponent: EditableSelectField,
                    options: [
                        {value: true, label: "Yes"},
                        {value: false, label: "No smokers"},
                        {value: "", label: "I don't mind"},
                    ]
                },
            ]
        },
        {
            title: "Lifestyle",
            sectionType: SECTION_FIELDS_LIST,
            sections: [
                {
                    label: "Interest",
                    className: "info-details",
                    configName: USER_PROFILE_UPDATE,
                    field: "interests",
                    value: getUserProfileValue("interests", targetUser),
                    fieldComponent: EditableTextField
                },
                {
                    label: "Hobbies",
                    className: "info-details",
                    configName: USER_PROFILE_UPDATE,
                    field: "hobbies",
                    value: getUserProfileValue("hobbies", targetUser),
                    fieldComponent: EditableTextField
                },
                {
                    label: "Smoking",
                    className: "info-details",
                    configName: USER_PROFILE_UPDATE,
                    field: "smoking_status",
                    value: uCaseFirst(getUserProfileValue("smoking_status", targetUser)),
                    fieldComponent: EditableSelectField,
                    options: [
                        {value: "full_smoker", label: "I'm a regular smoker"},
                        {value: "casual_smoker", label: "I only smoke casually"},
                        {value: "non_smoker", label: "I don't smoke"},
                    ]
                },
                {
                    label: "Languages",
                    className: "info-details",
                    configName: USER_PROFILE_UPDATE,
                    field: "languages",
                    value: getUserProfileValue("languages", targetUser),
                    fieldComponent: EditableTextField
                },
                {
                    label: "Weight",
                    className: "info-details",
                    configName: USER_PROFILE_UPDATE,
                    field: {
                        amount: "weight",
                        unit: "weight_unit"
                    },
                    value: {
                        amount: getUserProfileValue("weight", targetUser),
                        unit: getUserProfileValue("weight_unit", targetUser)
                    },
                    options: [
                        {value: "kg", label: "KG"},
                        {value: "st", label: "ST"},
                        {value: "lb", label: "LB"},
                        {value: "", label: "Prefer not to say"},
                    ],
                    fieldComponent: EditableMeasurementField
                },
                {
                    label: "Height",
                    className: "info-details",
                    configName: USER_PROFILE_UPDATE,
                    field: {
                        amount: "height",
                        unit: "height_unit"
                    },
                    value: {
                        amount: getUserProfileValue("height", targetUser),
                        unit: getUserProfileValue("height_unit", targetUser)
                    },
                    options: [
                        {value: "cm", label: "CM"},
                        {value: "ft", label: "FT"},
                        {value: "", label: "Prefer not to say"},
                    ],
                    fieldComponent: EditableMeasurementField
                },
            ]
        },
    ];
}