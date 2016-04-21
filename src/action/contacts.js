import {
  OPEN_CONTACTS,
  RECEIVE_CONTACTS,
  SEND_CONTACT,
  READ_CONTACT
} from '../constant';

import Contacts from 'react-native-contacts';
import opening from './opening';

export function openContactsFromLocal() {
  return (dispatch)=>{
    dispatch(opening(true));
      Contacts.getAll((err, contacts)=>{
        contacts = contacts.sort((a, b)=>{
          if (a.givenName < b.givenName) return -1;
          if (a.givenName > b.givenName) return 1;
          return 0;
        });
        dispatch(receiveContacts(contacts.filter(t => t.phoneNumbers.length > 0)))
        dispatch(opening(false));
      });
  }
}


export function receiveContacts(contacts) {
    return {type: RECEIVE_CONTACTS, contacts};
}
