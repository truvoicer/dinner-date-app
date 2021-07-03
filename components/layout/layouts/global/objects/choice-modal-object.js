export const CHOICE_MODAL_CONTENT_CLASSES = "choice_modal_content_classes";
export const CHOICE_MODAL_DIALOG_CLASSES = "choice_modal_dialog_classes";
export const CHOICE_MODAL_SIZE = "choice_modal_size";
export const CHOICE_MODAL_SHOW = "choice_modal_show";
export const CHOICE_MODAL_TITLE = "choice_modal_title";
export const CHOICE_MODAL_DESCRIPTION = "choice_modal_description";
export const CHOICE_MODAL_CANCEL_CALLBACK = "choice_modal_cancel_callback";
export const CHOICE_MODAL_CONFIRM_CALLBACK = "choice_modal_confirm_callback";
export const CHOICE_MODAL_BUTTONS = "choice_modal_buttons";
export const CHOICE_MODAL_BUTTON_TEXT = "choice_modal_button_text";
export const CHOICE_MODAL_BUTTON_CALLBACK = "choice_modal_button_callback";
export const CHOICE_MODAL_BUTTON_CALLBACK_PROPS = "choice_modal_button_callback_props";
export const CHOICE_MODAL_BUTTON_CLOSE = "choice_modal_button_close";
export const CHOICE_MODAL_BUTTON_VARIANT = "choice_modal_button_variant";

export const choiceModalObject = {
    [CHOICE_MODAL_TITLE]: "Confirmation",
    [CHOICE_MODAL_DESCRIPTION]: "Are you sure?",
    [CHOICE_MODAL_CONTENT_CLASSES]: "",
    [CHOICE_MODAL_DIALOG_CLASSES]: "",
    [CHOICE_MODAL_SIZE]: "md",
    [CHOICE_MODAL_SHOW]: false,
    [CHOICE_MODAL_CONFIRM_CALLBACK]: {},
    [CHOICE_MODAL_CANCEL_CALLBACK]: {},
    [CHOICE_MODAL_BUTTON_CALLBACK_PROPS]: {},
    [CHOICE_MODAL_BUTTONS]: [
        {
            [CHOICE_MODAL_BUTTON_TEXT]: "Cancel",
            [CHOICE_MODAL_BUTTON_CLOSE]: true
        },
        {
            [CHOICE_MODAL_BUTTON_TEXT]: "Confirm",
            [CHOICE_MODAL_BUTTON_CALLBACK_PROPS]: {}
        },
    ],
}