import Header from './components/Header'
import SuggestionData from './data/SuggestionData'
import Suggestionitem from './components/Suggestionitem'
import SuggestionList from './components/SuggestionList'
import { useState } from 'react'
import SuggestionForm from './components/SuggestionForm'

import SuggestionState from './components/SuggestionState'

function App() {
  const [suggestion, setSuggestion] = useState(SuggestionData)
  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete ??')) {
      setSuggestion(suggestion.filter((data) => data.id !== id))
    }
  }
  return (
    <>
      <Header />
      <div className="container">
        <SuggestionForm />
        <SuggestionState suggestion={suggestion} />
        <SuggestionList suggestion={suggestion} handleDelete={handleDelete} />
      </div>
    </>
  )
}

export default App
