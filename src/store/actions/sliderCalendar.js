import * as actionTypes from './actionTypes';

export const sliderAddFive = payload => {
  console.log(payload);
  return {
    type: actionTypes.ADD_FIVE_DAYS,
    payload: payload,
  };
};

export const sliderSubstractFive = () => {
  return {
    type: actionTypes.SUBSTRACT_FIVE_DAYS,
  };
};
