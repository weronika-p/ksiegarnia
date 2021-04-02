export const fetchSubmitError = e => ({
    type: 'SET_SUBMIT_ERROR',
    payload: {
      message: e.message,
      code: e.code || 500,
    }
});
  

