import React from 'react'
import PropTypes from 'prop-types'
import { useContext } from 'react'
import SuggestionContext from '../context/SuggestionContext'
const SuggestionState = () => {
    const {suggestion}= useContext(SuggestionContext)
    let average= suggestion.reduce((acc,cur)=>{
        return acc+ cur.rating
    },0)/suggestion.length
   average=average.toFixed(1)
  return (
    <div className='feedback-stats'>
        <h4>{suggestion.length} Reviews</h4>
        <h4>Average Rating: {isNaN(average)? 0 : average} </h4>
    </div>
  )
}

export default SuggestionState

SuggestionState.propTypes={
    suggestion:PropTypes.array.isRequired
}