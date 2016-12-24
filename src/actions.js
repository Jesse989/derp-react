export const ADD_DERP = 'ADD_DERP';

export const addDerp = (derpText) => {
  return {
    type: ADD_DERP,
    payload: derpText
  }
}
