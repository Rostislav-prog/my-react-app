import { TOGGLE_SHOW_PROFILE } from './action'

const initiaValues = {
  isShow: false,
}

export const profileReducer = (state = initiaValues, action) => {
  switch (action.type) {
    case TOGGLE_SHOW_PROFILE: {
      return {
        isShow: !state.isShow,
      }
    }
    default: {
      return state
    }
  }
}
