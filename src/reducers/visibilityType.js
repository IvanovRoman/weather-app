import { VisibleType} from '../actions'

const visibleType = (state = VisibleType.SHOW_CELSIUS, action) => {
  switch (action.type) {
    case 'SET_VISIBLE_TYPE':
      return action.type
    default:
      return state
  }
}

export default visibleType