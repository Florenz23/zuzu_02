import {Map} from 'immutable';
import {loop, Effects} from 'redux-loop-symbol-ponyfill';


// Initial state
const initialState = Map({
  recentContactId : 1,
});

// Actions
const SETRECENTCONTACTID = 'ContactState/SETRECENTCONTACTID'
// Action creators
export function setRecentContactId(contactId) {
  console.log(`state ${contactId}`)
  return {
    type: SETRECENTCONTACTID,
    payload : {
      contactId : contactId
    }
  };
}

// Reducer
export default function ContactStateReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SETRECENTCONTACTID:
      return state.update('recentContactId', value => action.payload.contactId);
    default:
      return state;
  }
}
