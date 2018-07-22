import React from 'react'
import PropTypes from 'prop-types'

const City = ({onClick, city, temp = -20}) => (
<li style = {{listStyleType: 'none'}}
    onClick={onClick}>
    {city } {temp}
  </li>
)

City.propTypes = {
  onClick: PropTypes.func.isRequired,
  city: PropTypes.string.isRequired,
  temp: PropTypes.number.isRequired
}

export default City