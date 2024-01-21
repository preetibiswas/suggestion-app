import React from 'react'
import Card from '../shared/Card'
import PropTypes from 'prop-types'
import { FaTimes} from 'react-icons/fa'

const Suggestionitem = ({item,handleDelete}) => {
  return (
   
      <Card>
          <div className='num-display'>{item.rating}</div>
          <div className='text-display'>{item.text}</div>
          <button className='close' onClick={()=>handleDelete(item.id)} ><FaTimes color='purple'/></button>

      </Card>
   
  )
}

export default Suggestionitem
Suggestionitem.propTypes={item:PropTypes.object.isRequired}
