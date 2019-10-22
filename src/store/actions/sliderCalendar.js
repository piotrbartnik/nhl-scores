import * as actionTypes from './actionTypes';

export const sliderAddFive = () => {
  return {
    type: actionTypes.ADD_FIVE_DAYS,
  };
};

export const sliderSubstractFive = () => {
  return {
    type: actionTypes.SUBSTRACT_FIVE_DAYS,
  };
};
