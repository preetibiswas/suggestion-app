import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid'

const SuggestionContext= createContext()

export const SuggestionProvider=({children})=>{
    const [suggestion,setSuggestion]= useState([
       {
        id:1,
        text:'Enhance user interface with intuitive design for better usability.',
        rating:6
       },
       {
        id:2,
        text:'Implement real-time notifications to keep users engaged.',
        rating:10
       },
       {
        id:3,
        text:'Optimize performance for faster loading times.',
        rating:9
       }
    ])
    const [suggestionEdit,setSuggestionEdit]= useState({
        item:{},
        edit:false
    })
    // delete suggestion

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete ??')) {
          setSuggestion(suggestion.filter((data) => data.id !== id))
        }
      }
    //   Add suggestion
      const handleAdd = (data) => {
        console.log('suggestion', data)
        data.id = uuidv4()
        setSuggestion([...suggestion, data])
      }

    //   Edit Suggestion
    const handleEdit=(item)=>{
       setSuggestionEdit({
        item,
        edit:true
       })
    }

    const updateSuggestion=(id,data)=>{
      console.log(id,data)
      setSuggestion(suggestion.map((suggest)=>suggest.id === id? {...suggest,...data}:suggest))
    }
    return (
        <SuggestionContext.Provider value={{ 
          suggestion,
          handleDelete,
          handleAdd,
          handleEdit,
          suggestionEdit,
          updateSuggestion }}>
            {children}
        </SuggestionContext.Provider>
    )
} 

export default SuggestionContext;