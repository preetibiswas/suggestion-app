import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from 'react-router-dom'
import Header from './components/Header'
import SuggestionData from './data/SuggestionData'
import Suggestionitem from './components/Suggestionitem'
import SuggestionList from './components/SuggestionList'
import { useState } from 'react'
import SuggestionForm from './components/SuggestionForm'
import { v4 as uuidv4 } from 'uuid'

import SuggestionState from './components/SuggestionState'
import AboutPages from './pages/AboutPages'

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
    <Router>
      <Header />

      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SuggestionForm handleAdd={handleAdd} />
                <SuggestionState suggestion={suggestion} />
                <SuggestionList
                  suggestion={suggestion}
                  handleDelete={handleDelete}
                />
              </>
            }
          ></Route>

          <Route path="/about" element={<AboutPages />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
