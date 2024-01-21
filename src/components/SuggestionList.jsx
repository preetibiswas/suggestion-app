import React from 'react'
import Suggestionitem from './Suggestionitem'
import PropTypes from 'prop-types'

const SuggestionList = ({suggestion,handleDelete}) => {
    console.log(suggestion)
    if(!suggestion || suggestion.length === 0){
        return <p>No Suggestion</p>
    }
  return (
    <div className='feedback-list'>
        {suggestion.map((item)=>(
            <Suggestionitem key={item.id} item={item} handleDelete={handleDelete}/>
        ))}
    </div>
  )
}

export default SuggestionList

SuggestionList.propTypes={
  suggestion:PropTypes.arrayOf(
    PropTypes.shape({
      id:PropTypes.number.isRequired,
      text:PropTypes.string.isRequired,
      rating:PropTypes.number.isRequired
    })
  )
}