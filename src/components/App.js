import React from 'react'
import TodoList from './TodoList'

const App = props => (
  <div className="container">
    <h1>hello {props.name}</h1>
    <TodoList />
  </div>
)

export default App
