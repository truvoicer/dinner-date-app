import store from "../../redux/store";
import {USER_MEDIA_UPDATE_REQUESTED} from "../../redux/sagas/media/media-sagas";
import {SESSION_STATE_KEY, SESSION_USER} from "../../redux/constants/session-constants";

export const PHOTO_ALBUM_COLLECTION = "photo_album";
export const AUDIO_COLLECTION = "audio_collection";
export const VIDEO_COLLECTION = "video_collection";

export const buildMediaFilesInitialFormValues = (files = []) => {
    return {
        show_checkboxes: false,
        files: []
    };
}

export const mediaFilesSubmitHandler = (values, {setSubmitting}) => {
    let data = {...values};
    console.log(data);
}

export const imageFileUploadHandler = ({name, file}) => {
    const user = store.getState()[SESSION_STATE_KEY][SESSION_USER];
    store.dispatch({
        type: USER_MEDIA_UPDATE_REQUESTED,
        payload: {
            upload_type: "media",
            type: "image",
            media_category: name,
            file: file
        },
        user: user
    })
}