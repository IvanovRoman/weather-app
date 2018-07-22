import { connect } from 'react-redux'
import { deleteCity } from '../actions'
import CityList from '../components/CityList'

const getAddedCities = (cities) => { 
  return cities
}

const mapStateProps = state => ({
  cities: getAddedCities(state.cities)
})

const mapDispatchToProps = dispatch => ({
  deleteCity: id => dispatch(deleteCity(id))
})

export default connect(
  mapStateProps, 
  mapDispatchToProps
)(CityList)