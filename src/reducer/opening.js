
import {
  OPEN
} from '../constant';


export default function opening(state = true, action) {
  switch (action.type) {
    case OPEN:
      return action.open;
  }

  return state;
}
