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

import { SuggestionProvider } from './context/SuggestionContext'

import SuggestionState from './components/SuggestionState'
import AboutPages from './pages/AboutPages'

function App() {
  const [suggestion, setSuggestion] = useState(SuggestionData)

  return (
    <SuggestionProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <SuggestionForm />
                  <SuggestionState />
                  <SuggestionList />
                </>
              }
            ></Route>
            <Route path="/about" element={<AboutPages />} />
          </Routes>
        </div>
      </Router>
    </SuggestionProvider>
  )
}

export default App
