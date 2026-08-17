import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Feed from './pages/feed.jsx'
import CreatePost from './pages/createPost.jsx'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={ <h1>Hello from main page</h1> } />
        <Route path='/create-post' element={ <CreatePost /> } />
        <Route path='/feed' element={ <Feed /> } />
      </Routes>
    </Router>
  )
}

export default App