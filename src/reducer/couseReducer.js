const courseBuilder = (state, action) => {
  switch (action.type) {
    case 'Add_PRACTICE': {
      return action.practice;
    }
    // case 'SET_SUBSEC_VISIBILITY': {
    //   return action.filter;
    // }
    // case 'SET_PRACTICE_VISIBILITY': {
    //   return action.filter;
    // }
    // case 'SET_DOWNLOAD_VISIBILITY': {
    //   return action.filter;
    // }
    default:
    return state;
  }
};

export default courseBuilder;
