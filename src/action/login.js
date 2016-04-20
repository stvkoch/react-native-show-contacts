import {
  SEND_CONTACT,
  READ_CONTACT
} from '../constant';

export function send_contact(contact) {

  return {type: SEND_CONTACT, contact};
};
export function read_contact() {};
