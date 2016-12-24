import chai from 'chai';
import { expect } from 'chai';
import { Map } from 'immutable';
import chaiImmutable from 'chai-immutable';
chai.use(chaiImmutable);
import samplePayload from './samplePayload';

import { getDerps } from './core';

describe('get derps, unauthenticated', () => {

  it('contains an array of derps', () => {
    const state = Map();
    const nextState = getDerps(state);

    expect(nextState).to.equal(Map({
      isAuthenticated: false,
      user: undefined,
      derps: samplePayload
    }))

  })

  describe('authenticate', () => {

    it('recieves succesful authentication', () => {
      const state = Map();
      const nextState = authenticate(state);

      expect(nextState).to.equal(Map({
        isAuthenticated: true,
        user:
      }))
    })
  })
})
