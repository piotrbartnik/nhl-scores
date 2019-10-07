import * as actionTypes from './actionTypes';

export const sliderAdd = () => {
  return {
    type: actionTypes.ADD_ONE,
  };
};

export const sliderSubstract = () => {
  return {
    type: actionTypes.SUBSTRACT_ONE,
  };
};
