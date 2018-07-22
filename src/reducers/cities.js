const cities = (state = [], action) => {
  switch (action.type) {
    case 'ADD_CITY':
      return [
        ...state,
        {
          id: action.id,
          city: action.city,
          temp: action.temp
        }
      ]
    case 'DELETE_CITY':
      return state.filter(city => city.id !== action.id) 
    default:
      return state
  }
}

export default cities