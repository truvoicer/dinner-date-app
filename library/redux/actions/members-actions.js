import store from "../store"
import {setMembersError, setMembersSearchResults, setMembersSingle} from "../reducers/members-reducer";

export function setMembersSearchResultsAction({data}) {
    store.dispatch(setMembersSearchResults(data))
}

export function setMembersSingleAction({data}) {
    console.log(data)
    store.dispatch(setMembersSingle(data))
}
export function setMembersErrorAction(error) {
    store.dispatch(setMembersError(error))
}

