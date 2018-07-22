import { combineReducers } from 'redux'
import cities from './cities'
import visibilityType from './visibilityType'

export default combineReducers({
  cities,
  visibilityType
})