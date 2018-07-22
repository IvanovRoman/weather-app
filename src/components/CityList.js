import React from 'react'
import PropTypes from 'prop-types'
import City from './City'

const CityList = ({ cities, deleteCity  }) => (
  <ul>
    {cities.map(city => 
      <City
        key={city.id}
        {...city}
        onClick = {() => deleteCity(city.id)}
        />
      )}
  </ul>
)

CityList.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired
  }).isRequired).isRequired,
  deleteCity: PropTypes.func.isRequired
}

export default CityList