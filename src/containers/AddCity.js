import React from 'react'
import { connect } from 'react-redux'
import { addCity } from '../actions'
 import { Button } from 'antd'

const AddCity = ({ dispatch, state }) => {
  let input
  
  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if(!input.value.trim()) {
          return
        }
        dispatch(addCity(input.value, state))
        input.value =''
        }}> 
        <input ref={node => input = node}/>
        <Button type="submit" htmlType="submit">
          Add City
        </Button>
      </form>
    </div>
  )
}

export default connect()(AddCity)