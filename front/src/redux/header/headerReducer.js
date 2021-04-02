const INITIAL_STATE = {
    search: false
  }
  
const headerReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case 'TOGGLE_SEARCH':
        return {
          ...state, 
          search: !state.search
        }
      default:
        return state
    }
  }
  
export default headerReducer