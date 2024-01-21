import React from 'react'
import Suggestionitem from './Suggestionitem'

const SuggestionList = ({suggestion}) => {
    console.log(suggestion)
    if(!suggestion || suggestion.length === 0){
        return <p>No Suggestion</p>
    }
  return (
    <div className='feedback-list'>
        {suggestion.map((item)=>(
            <Suggestionitem key={item.id} item={item}/>
        ))}
    </div>
  )
}

export default SuggestionList