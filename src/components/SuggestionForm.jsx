import React, { useState } from "react";
import Card from "../shared/Card";
import Button from "../shared/Button";
import { FaHandLizard } from "react-icons/fa";
import { isDisabled } from "@testing-library/user-event/dist/utils";
import RatingSelect from "./RatingSelect";

const SuggestionForm = ({handleAdd}) => {
  const [text, setText] = useState("");
  const [btnDisabled,setBtnDisabled]= useState(true)
  const [message,setMessage]=useState('')
  const [rating,setRating]= useState(10)
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
    console.log(newFeedback)
    handleAdd(newFeedback)
  }

}
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>how would you Rate our service with us?</h2>
        <RatingSelect select={(rating)=>setRating(rating)}/>
        <div className="input-group">
          <input type="text" placeholder="Write a suggestion" onChange={handleTextChange} />
          <Button 
          type='submit'
        version='secondary'
        isDisabled={isDisabled}
        >send</Button>
          
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
};

export default SuggestionForm;
