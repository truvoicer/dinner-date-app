import moment from 'moment';

export const formatDate = (dateString, formatString = "Do MMMM YYYY") => {
    moment.updateLocale('en', {
        invalidDate : ""
    });
    if (!isSet(dateString) || dateString === null || dateString === "") {
        return dateString;
    }
    let date;
    if (!isNaN(dateString)) {
        date = moment(dateString*1000).format(formatString);

    } else {
        date = moment(dateString).format(formatString);
    }
    if (isSet(date)) {
        return date;
    }
    return dateString
}

export const isEmpty = (object) => {
    for(let key in object) {
        if(object.hasOwnProperty(key))
            return false;
    }
    return true;
}

export const isSet = (item) => {
    return typeof item !== "undefined";
}

export const isNotEmpty = (item) => {
    return typeof item !== "undefined" && item !== null && item !== "" && item !== false;
}

export const uCaseFirst = (string) => {
    if (!isNotEmpty(string)) {
        return ""
    }
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export const isObjectEmpty = (object) => {
    if (!isSet(object)) {
        return false;
    }
    return Object.keys(object).length === 0 && object.constructor === Object
}

export const isObject = (object) => {
    return typeof object === "object";
}

export const scrollToRef = (ref) => {
    window.scrollTo(0, ref.current.offsetTop)
}

export const getAcceptedMimeTypesString = (allowedExtArray = null) => {
    if (allowedExtArray === null) {
        return '';
    }
    return allowedExtArray.map(type => type.mime_type).join(", ");
}
export const getAcceptedFileExtString = (allowedExtArray = null, allowedMessage) => {
    if (allowedExtArray === null) {
        return '';
    }
    const joinAcceptedFiles = allowedExtArray.map(type => type.extension).join(", ");
    return allowedMessage.replace("[accepted]", joinAcceptedFiles)
}
