import { v4 } from 'uuid';
import axios from 'axios'

let temp = 10
export const addCity = (city, itemId) => ({
  type: 'ADD_CITY',
  id:  v4(), //itemId++,
  city,
  temp: temp
})

export const toggleCity = id => ({
  type: 'TOGGLE_CITY',
  id
})

export const deleteCity = id => ({
  type: 'DELETE_CITY',
  id
})

export const VisibleType = {
  SHOW_FAHRENHEIT: 'SHOW_FAHRENHEIT',
  SHOW_CELSIUS: 'SHOW_CELSIUS' 
}