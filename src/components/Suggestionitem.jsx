import React from 'react'
import Card from '../shared/Card'
import PropTypes from 'prop-types'
import { FaTimes} from 'react-icons/fa'
import { FaEdit } from 'react-icons/fa'
import { useContext } from 'react'
import SuggestionContext from '../context/SuggestionContext'

const Suggestionitem = ({item}) => {
  const {handleDelete,handleEdit}= useContext(SuggestionContext)
  return (
   
      <Card>
          <div className='num-display'>{item.rating}</div>
          <div className='text-display'>{item.text}</div>
          <button className='close' onClick={()=>handleDelete(item.id)} ><FaTimes color='purple'/></button>
          <button className='edit' onClick={()=>handleEdit(item)} ><FaEdit color='purple'/></button>

      </Card>
   
  )
}

export default Suggestionitem
Suggestionitem.propTypes={item:PropTypes.object.isRequired}
