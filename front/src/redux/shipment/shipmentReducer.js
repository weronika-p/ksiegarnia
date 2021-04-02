const INITIAL_STATE = {
    isError: false,
    errorMessage: '',
    errorCode: -1
  }
  
  const shipmentReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case 'SET_SUBMIT_ERROR':
        return {
          ...state,
          isError: true,
          errorMessage: action.payload.message,
          errorCode: action.payload.code,
        }
      default:
        return state
    }
  }
  
  export default shipmentReducer