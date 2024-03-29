import React, { useState,useEffect} from "react";
import Card from "../shared/Card";
import Button from "../shared/Button";
import { FaHandLizard } from "react-icons/fa";
import { isDisabled } from "@testing-library/user-event/dist/utils";
import RatingSelect from "./RatingSelect";
import { useContext } from "react";
import SuggestionContext from "../context/SuggestionContext";

const SuggestionForm = () => {
  const {handleAdd,suggestionEdit,updateSuggestion}= useContext(SuggestionContext)
  const [text, setText] = useState("");
  const [btnDisabled,setBtnDisabled]= useState(true)
  const [message,setMessage]=useState('')
  const [rating,setRating]= useState(10)

  useEffect(()=>{
    if(suggestionEdit.edit === true){
      setBtnDisabled(false)
      setText(suggestionEdit.item.text)
      setRating(suggestionEdit.item.rating)
  
    }

  },[suggestionEdit])

const handleTextChange=(e)=>{
    if(text === ''){
        setBtnDisabled(true)
        setMessage(null)
    }
    if(text !== '' && text.trim().length <=10){
        setMessage('text must br atleast 10 character')
        setBtnDisabled(true)
    }
    
    else{
        setMessage(null)
        setBtnDisabled(false)
       
    }
    setText(e.target.value)

}
const handleSubmit=(e)=>{
  e.preventDefault()
  if(text.trim().length>10){
    const newFeedback={
      text,
      rating
    }

    if(suggestionEdit.edit === true){
      updateSuggestion(suggestionEdit.item.id, newFeedback)
    }
    else{
     
      handleAdd(newFeedback)

    }
    setText('') 
   
   
   

  }
  

}
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>how would you Rate our service with us?</h2>
        <RatingSelect select={(rating)=>setRating(rating)}/>
        <div className="input-group">
          <input 
          type="text"
          value={text}
           placeholder="Write a suggestion" onChange={handleTextChange} />
          <Button 
          type='submit'
        version='secondary'
        btnDisabled={btnDisabled}
        >send</Button>
          
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
};

export default SuggestionForm;
