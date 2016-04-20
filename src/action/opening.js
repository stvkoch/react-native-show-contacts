import {
  OPEN
} from '../constant';


export default function opening(open = true) {
  return {type: OPEN, open: open};
}
