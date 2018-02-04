import * as actionTypes from './actionTypes';

export const closeAlertMessage = () => {
  return {
    type: actionTypes.RESET_MESSAGE,
  };
};
