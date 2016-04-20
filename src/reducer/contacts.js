
import {
  RECEIVE_CONTACTS
} from '../constant';


export default function contacts(state = [], action) {
  console.log(action);
  switch (action.type) {
    case RECEIVE_CONTACTS:
      return Object.assign([], state, action.contacts);
  }

  return state;
}
