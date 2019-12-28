import React from 'react'

const TodoItem = props => (
  <button
    type="button"
    className={`list-group-item list-group-item-action${
      props.done ? ' active' : ''
    }`}
    onClick={props.onClick}
  >
    {props.name}
  </button>
)

TodoItem.defaultProps = {
  done: false,
  name: 'Default item',
}

export default TodoItem
