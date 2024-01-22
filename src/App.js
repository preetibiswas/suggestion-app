import Header from './components/Header'
import SuggestionData from './data/SuggestionData'
import Suggestionitem from './components/Suggestionitem'
import SuggestionList from './components/SuggestionList'
import { useState } from 'react'
import SuggestionForm from './components/SuggestionForm'
import { v4 as uuidv4 } from 'uuid'

import SuggestionState from './components/SuggestionState'

function App() {
  const [suggestion, setSuggestion] = useState(SuggestionData)
  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete ??')) {
      setSuggestion(suggestion.filter((data) => data.id !== id))
    }
  }
  const handleAdd = (data) => {
    console.log('suggestion', data)
    data.id = uuidv4()
    setSuggestion([...suggestion, data])
  }
  return (
    <>
      <Header />
      <div className="container">
        <SuggestionForm handleAdd={handleAdd} />
        <SuggestionState suggestion={suggestion} />
        <SuggestionList suggestion={suggestion} handleDelete={handleDelete} />
      </div>
    </>
  )
}

export default App
