import React from 'react'
import TodoItem from './TodoItem'

class TodoList extends React.Component {
  state = {
    todos: [
      { name: 'Cras justo odioooo', done: true },
      { name: 'Dapibus ac facilisis in', done: false },
      { name: 'Morbi leo risus', done: false },
      { name: 'hello world', done: true },
      { name: 'Porta ac consectetur ac', done: false },
      { name: 'Vestibulum at eros1', done: false },
      { name: 'Vestibulum at eros', done: false },
    ],
  }

  handleClick(index) {
    const todos = [...this.state.todos]
    todos[index].done = !todos[index].done
    this.setState({ todos: todos })
  }

  render() {
    return (
      <div className="list-group">
        {this.state.todos.map((v, k) => (
          <TodoItem
            key={k}
            name={v.name}
            done={v.done}
            onClick={() => this.handleClick(k)}
          />
        ))}
      </div>
    )
  }
}

export default TodoList
