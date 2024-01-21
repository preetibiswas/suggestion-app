import Header from './components/Header'
import SuggestionData from './data/SuggestionData'
import Suggestionitem from './components/Suggestionitem'
import SuggestionList from './components/SuggestionList'
import { useState } from 'react'
import './index.css'

function App() {
  const [suggestion, setSuggestion] = useState(SuggestionData)
  return (
    <>
      <Header />
      <div classame="container">
        <SuggestionList suggestion={suggestion} />
      </div>
    </>
  )
}

export default App
