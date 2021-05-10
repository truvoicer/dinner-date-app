import {SECTION_FIELDS_LIST, SECTION_FIELDS_SINGLE, USER_PROFILE_UPDATE} from "../editable-fields-constants";
import EditableTextField from "../../../../components/forms/editable-fields/EditableTextField";
import EditableSelectField from "../../../../components/forms/editable-fields/EditableSelectField";
import {calculateDateDifference, uCaseFirst} from "../../../../library/helpers/utils-helper";
import EditableDateField from "../../../../components/forms/editable-fields/EditableDateField";
import EditableTextAreaField from "../../../../components/forms/editable-fields/EditableTextAreaField";
import EditableMeasurementField from "../../../../components/forms/editable-fields/EditableMeasurementField";
import {
    getHeightUnitValue,
    getHeightValue,
    getWeightUnitValue,
    getWeightValue
} from "../../../../library/helpers/user-helper";

export const editProfileFormFieldList = (getSingleMemberProfileValue) => {
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
                    value: getSingleMemberProfileValue("first_name"),
                    fieldComponent: EditableTextField
                },
                {
                    label: "Last Name",
                    className: "info-details",
                    configName: USER_PROFILE_UPDATE,
                    field: "last_name",
                    value: getSingleMemberProfileValue("last_name"),
                    fieldComponent: EditableTextField
                },
                {
                    label: "I'm a",
                    className: "info-details",
                    configName: USER_PROFILE_UPDATE,
                    field: "gender",
                    value: uCaseFirst(getSingleMemberProfileValue("gender")),
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
                    value: uCaseFirst(getSingleMemberProfileValue("gender_preference")),
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
                    value: uCaseFirst(getSingleMemberProfileValue("marital_status")),
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
                    value: calculateDateDifference(getSingleMemberProfileValue("dob")),
                },
                {
                    label: "Date of Birth",
                    className: "info-details",
                    configName: USER_PROFILE_UPDATE,
                    field: "dob",
                    value: getSingleMemberProfileValue("dob"),
                    fieldComponent: EditableDateField
                },
                {
                    label: "Address",
                    className: "info-details",
                    configName: USER_PROFILE_UPDATE,
                    field: "address",
                    value: getSingleMemberProfileValue("address"),
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
                    value: getSingleMemberProfileValue("summary"),
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
                    value: getSingleMemberProfileValue("partner_qualities"),
                    fieldComponent: EditableTextField
                },
                {
                    label: "Smoking Preference",
                    className: "info-details",
                    configName: USER_PROFILE_UPDATE,
                    field: "smoking_preference",
                    value: uCaseFirst(getSingleMemberProfileValue("smoking_preference")),
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
                    value: getSingleMemberProfileValue("interests"),
                    fieldComponent: EditableTextField
                },
                {
                    label: "Hobbies",
                    className: "info-details",
                    configName: USER_PROFILE_UPDATE,
                    field: "hobbies",
                    value: getSingleMemberProfileValue("hobbies"),
                    fieldComponent: EditableTextField
                },
                {
                    label: "Smoking",
                    className: "info-details",
                    configName: USER_PROFILE_UPDATE,
                    field: "smoking_status",
                    value: uCaseFirst(getSingleMemberProfileValue("smoking_status")),
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
                    value: getSingleMemberProfileValue("languages"),
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
                        amount: getWeightValue(
                            getSingleMemberProfileValue("weight"),
                            getSingleMemberProfileValue("weight_unit")
                        ),
                        unit: getWeightUnitValue(getSingleMemberProfileValue("weight_unit"))
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
                        amount: getHeightValue(
                            getSingleMemberProfileValue("height"),
                            getSingleMemberProfileValue("height_unit")
                        ),
                        unit: getHeightUnitValue(getSingleMemberProfileValue("height_unit"))
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