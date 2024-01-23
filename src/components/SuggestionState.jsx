import React from 'react'
import PropTypes from 'prop-types'
import { useContext } from 'react'
import SuggestionContext from '../context/SuggestionContext'
const SuggestionState = () => {
    const {suggestion}= useContext(SuggestionContext)
    console.log('state',suggestion)
//     let average= suggestion.reduce((acc,cur)=>{
//         return acc+ cur.rating
//     },0)/suggestion.length
//    average=average.toFixed(1).replace(/[.,]0$/,'')
//    console.log('average',average)


   const totalRatings = suggestion.reduce((acc, cur) => acc + Number(cur.rating), 0);
   console.log(totalRatings)
  const average = totalRatings / suggestion.length

  // Check if average is NaN or undefined
  const formattedAverage = isNaN(average) || !isFinite(average) ? 0 : average.toFixed(1);
  return (
    <div className='feedback-stats'>
        <h4>{suggestion.length} Reviews</h4>
        <h4>Average Rating: {isNaN(formattedAverage)? 0 : formattedAverage} </h4>
    </div>
  )
}

export default SuggestionState

SuggestionState.propTypes={
    suggestion:PropTypes.array.isRequired
}