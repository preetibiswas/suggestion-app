import { createContext, useState ,useEffect} from "react";
import { v4 as uuidv4 } from 'uuid'

const SuggestionContext= createContext()

export const SuggestionProvider=({children})=>{

   

    const [suggestion,setSuggestion]= useState([])
    const [loading,setLoading]= useState(true)
    const [suggestionEdit,setSuggestionEdit]= useState({
        item:{},
        edit:false
    })

    useEffect(()=>{

      fetchData()

    },[])

// fetching data
const fetchData= async()=>{
  const response= await fetch(`http://localhost:5000/suggestion?_sort=id&_order=desc`)
  const data=await response.json()
  setSuggestion(data)
  setLoading(false)
  console.log(data)
  
}

    // delete suggestion

    // const handleDelete = (id) => {
    //     if (window.confirm('Are you sure you want to delete ??')) {
    //       setSuggestion(suggestion.filter((data) => data.id !== id))
    //     }
    //   }

      const handleDelete = async(id) => {
        if (window.confirm('Are you sure you want to delete ??')) {
          await fetch('http://localhost:5000/suggestion',{
            method:'DELETE'

          })
          setSuggestion(suggestion.filter((data) => data.id !== id))
        }
      }
    //   Add suggestion
      // const handleAdd = (data) => {
      //   console.log('suggestion', data)
      //   data.id = uuidv4()
      //   setSuggestion([...suggestion, data])
      // }
      // add feekback to backebnd
      const handleAdd = async(newSuggestion)=>{
        const response= await  fetch('http://localhost:5000/suggestion',{
          method:'POST',
          headers:{'content-Type':'application/json'},
          body:JSON.stringify(newSuggestion)
        })
        const data= await response.json()
        setSuggestion([data,...suggestion])
      }

    //   Edit Suggestion
    const handleEdit=(item)=>{
       setSuggestionEdit({
        item,
        edit:true
       })
    }

    // const updateSuggestion=(id,data)=>{
    //   console.log(id,data)
    //   setSuggestion(suggestion.map((suggest)=>suggest.id === id? {...suggest,...data}:suggest))
    // }

    const updateSuggestion= async(id,Upsuggest)=>{
      console.log(id,Upsuggest)
      const response= await fetch(`http://localhost:5000/suggestion/${id}`,{
        method:'PUT',
        headers:{'content-Type':'application/json'},
        body:JSON.stringify(Upsuggest)
      })
      const datas= await response.data
      setSuggestion(suggestion.map((suggest)=>suggest.id === id? {...datas,...suggest}:suggest))
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