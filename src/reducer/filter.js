
import {
  FILTER
} from '../constant';


export default function filter(state = null, action) {
  switch (action.type) {
    case FILTER:
      return action.filter;
  }

  return state;
}
