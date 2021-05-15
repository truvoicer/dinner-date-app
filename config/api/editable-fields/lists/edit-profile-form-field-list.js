import {SECTION_FIELDS_LIST, SECTION_FIELDS_SINGLE, USER_PROFILE_UPDATE} from "../editable-fields-constants";
import EditableTextField from "../../../../components/forms/editable-fields/EditableTextField";
import EditableSelectField from "../../../../components/forms/editable-fields/EditableSelectField";
import {calculateDateDifference, isNotEmpty, uCaseFirst} from "../../../../library/helpers/utils-helper";
import EditableDateField from "../../../../components/forms/editable-fields/EditableDateField";
import EditableTextAreaField from "../../../../components/forms/editable-fields/EditableTextAreaField";
import EditableMeasurementField from "../../../../components/forms/editable-fields/EditableMeasurementField";
import {
    getHeightUnitValue,
    getHeightValue,
    getWeightUnitValue,
    getWeightValue
} from "../../../../library/helpers/user-helper";
import store from "../../../../library/redux/store";
import {LOCALE_COUNTRIES, LOCALE_STATE_KEY} from "../../../../library/redux/constants/locale-constants";

export const editProfileFormFieldList = (getUserProfileValue) => {
    const countryList = store.getState()[LOCALE_STATE_KEY][LOCALE_COUNTRIES];
    const country = getUserProfileValue("country");
    return [
        {
            title: "Base Info",
            sectionType: SECTION_FIELDS_LIST,
            sections: [
                {
                    ucFirst: true,
                    label: "First Name",
                    className: "info-details",
                    configName: USER_PROFILE_UPDATE,
                    field: "first_name",
                    value: getUserProfileValue("first_name"),
                    fieldComponent: EditableTextField
                },
                {
                    ucFirst: true,
                    label: "Last Name",
                    className: "info-details",
                    configName: USER_PROFILE_UPDATE,
                    field: "last_name",
                    value: getUserProfileValue("last_name"),
                    fieldComponent: EditableTextField
                },
                {
                    ucFirst: true,
                    label: "I'm a",
                    className: "info-details",
                    configName: USER_PROFILE_UPDATE,
                    field: "gender",
                    value: getUserProfileValue("gender"),
                    fieldComponent: EditableSelectField,
                    options: [
                        {value: "male", label: "Man"},
                        {value: "female", label: "Woman"},
                        {value: "other", label: "Other"},
                        {value: "not_specified", label: "Rather not say"}
                    ]
                },
                {
                    ucFirst: true,
                    label: "Looking for a",
                    className: "info-details",
                    configName: USER_PROFILE_UPDATE,
                    field: "gender_preference",
                    value: getUserProfileValue("gender_preference"),
                    fieldComponent: EditableSelectField,
                    options: [
                        {value: "male", label: "Man"},
                        {value: "female", label: "Woman"},
                        {value: "both", label: "Either"},
                        {value: "not_specified", label: "Rather not say"},
                    ]
                },
                {
                    ucFirst: true,
                    label: "Marital Status",
                    className: "info-details",
                    configName: USER_PROFILE_UPDATE,
                    field: "marital_status",
                    value: getUserProfileValue("marital_status"),
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
                    value: calculateDateDifference(getUserProfileValue("dob")),
                },
                {
                    label: "Date of Birth",
                    className: "info-details",
                    configName: USER_PROFILE_UPDATE,
                    field: "dob",
                    value: getUserProfileValue("dob"),
                    fieldComponent: EditableDateField
                },
                {
                    ucFirst: true,
                    label: "Address",
                    className: "info-details",
                    configName: USER_PROFILE_UPDATE,
                    field: "address",
                    value: getUserProfileValue("address"),
                    fieldComponent: EditableTextField
                },
                {
                    ucFirst: true,
                    label: "Country",
                    className: "info-details",
                    configName: USER_PROFILE_UPDATE,
                    field: "country",
                    value: isNotEmpty(country)? {
                        value: country.id,
                        label: country.name
                    } : null,
                    fieldComponent: EditableSelectField,
                    options: countryList.map(country => {
                        return {
                            value: country.id,
                            label: country.name
                        }
                    })
                },
            ]
        },
        {
            title: "Myself Summary",
            sectionType: SECTION_FIELDS_SINGLE,
            sections: [
                {
                    ucFirst: true,
                    label: "Summary",
                    className: "info-details",
                    configName: USER_PROFILE_UPDATE,
                    fullWidth: true,
                    field: "summary",
                    value: getUserProfileValue("summary"),
                    fieldComponent: EditableTextAreaField
                },
            ]
        },
        {
            title: "Looking For",
            sectionType: SECTION_FIELDS_LIST,
            sections: [
                {
                    ucFirst: true,
                    label: "Things I'm looking for",
                    className: "info-details",
                    configName: USER_PROFILE_UPDATE,
                    field: "partner_qualities",
                    value: getUserProfileValue("partner_qualities"),
                    fieldComponent: EditableTextField
                },
                {
                    ucFirst: true,
                    label: "Smoking Preference",
                    className: "info-details",
                    configName: USER_PROFILE_UPDATE,
                    field: "smoking_preference",
                    value: getUserProfileValue("smoking_preference"),
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
                    ucFirst: true,
                    label: "Interest",
                    className: "info-details",
                    configName: USER_PROFILE_UPDATE,
                    field: "interests",
                    value: getUserProfileValue("interests"),
                    fieldComponent: EditableTextField
                },
                {
                    ucFirst: true,
                    label: "Hobbies",
                    className: "info-details",
                    configName: USER_PROFILE_UPDATE,
                    field: "hobbies",
                    value: getUserProfileValue("hobbies"),
                    fieldComponent: EditableTextField
                },
                {
                    ucFirst: true,
                    label: "Smoking",
                    className: "info-details",
                    configName: USER_PROFILE_UPDATE,
                    field: "smoking_status",
                    value: getUserProfileValue("smoking_status"),
                    fieldComponent: EditableSelectField,
                    options: [
                        {value: "full_smoker", label: "I'm a regular smoker"},
                        {value: "casual_smoker", label: "I only smoke casually"},
                        {value: "non_smoker", label: "I don't smoke"},
                    ]
                },
                {
                    ucFirst: true,
                    label: "Languages",
                    className: "info-details",
                    configName: USER_PROFILE_UPDATE,
                    field: "languages",
                    value: getUserProfileValue("languages"),
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
                            getUserProfileValue("weight"),
                            getUserProfileValue("weight_unit")
                        ),
                        unit: getWeightUnitValue(getUserProfileValue("weight_unit"))
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
                            getUserProfileValue("height"),
                            getUserProfileValue("height_unit")
                        ),
                        unit: getHeightUnitValue(getUserProfileValue("height_unit")),
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