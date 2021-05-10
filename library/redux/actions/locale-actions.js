import store from "../store"
import {setLocaleCountries, setLocaleError} from "../reducers/locale-reducer";

export function setLocaleCountriesAction({data}) {
    store.dispatch(setLocaleCountries(data))
}

export function setLocaleErrorAction(error) {
    store.dispatch(setLocaleError(error))
}

