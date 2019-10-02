import * as actionTypes from './actionTypes';

export const sliderAdd = () => {
  return {
    type: actionTypes.ADD_FIVE_DAYS,
  };
};

export const sliderSubstract = () => {
  return {
    type: actionTypes.SUBSTRACT_FIVE_DAYS,
  };
};
