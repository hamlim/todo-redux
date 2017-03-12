import React, { PropTypes } from 'react'

const Todo = ({ onClick, completed, text, timeDue, note }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    <h4>{text}</h4>
    <date dateTime={timeDue}>{timeDue}</date>
    <p>{note}</p>
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  dateDue: PropTypes.instanceOf(Date),
  note: PropTypes.string.isRequired
}

export default Todo