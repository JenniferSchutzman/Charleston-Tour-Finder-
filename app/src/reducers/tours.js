import { ALL_RECOMMENDATIONS } from '../constants'

export const tours = (state = [], action) => {
  switch (action.type) {
    case ALL_RECOMMENDATIONS:
      return action.payload
    default:
      return state
  }
}

export default tours