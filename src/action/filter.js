import {
  FILTER
} from '../constant';


export function addFilter(filter = null) {
  return {type: FILTER, filter: filter};
}
