import React from 'react'
import Suggestionitem from './Suggestionitem'
import PropTypes from 'prop-types'
import { motion, AnimatePresence } from "framer-motion"

const SuggestionList = ({suggestion,handleDelete}) => {
    console.log(suggestion)
    if(!suggestion || suggestion.length === 0){
        return <p>No Suggestion</p>
    }
  return (
    <AnimatePresence>
      <div className='feedback-list'>
          {suggestion.map((item)=>(
              <motion.div
              key={item.id}
              initial={{opacity:0}}
              animate={{opacity:1}}
              exit={{opacity:0}}
              
              >
                <Suggestionitem key={item.id} item={item} handleDelete={handleDelete}/>
              </motion.div>
          ))}
      </div>
    </AnimatePresence>
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