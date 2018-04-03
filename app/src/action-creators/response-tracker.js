import fetch from 'isomorphic-fetch'
import {
  SELECTED_EXPERIENCE,
  SELECTED_DAYS,
  SELECTED_INTEREST,
  SELECTED_HISTORY
} from '../constants'
const url = 'http://localhost:5000'

export const areaOfInterest = async (dispatch, getState) => {
  dispatch({ type: SELECTED_INTEREST, payload: {} })
  const interests = await fetch(`${url}/interests`).then(res => res.json())
  dispatch({ type: SELECTED_INTEREST, payload: interests })
}
export const experienceTypes = async (dispatch, getState) => {
  const history = await fetch(`${url}/experiences`).then(res => res.json())
  console.log('history inside action creator', history)
  dispatch({ type: SELECTED_HISTORY, payload: history })
}
// export const getExperienceTypes = async (dispatch, getState) => {
//   console.log('You clicked on an interests', state.interest.name)
//   return {
//     type: 'SELECTED_HISTORY',
//     payload: history
//   }
// }