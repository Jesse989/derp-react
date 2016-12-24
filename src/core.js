import { Map } from 'immutable';
import samplePayload from './samplePayload';

export function getDerps() {
  return Map({
    isAuthenticated: false,
    user: undefined,
    derps: samplePayload
  })
}
