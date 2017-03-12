import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let AddTodo = ({ dispatch }) => {
  let input, note, dateDue;

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value, note.value, dateDue.value));
        input.value = '';
        note.value = '';
        dateDue.value = '';
      }}>
        <label style={{display: 'block'}}>
          Title:
          <input ref={node => {
            input = node
          }} />
        </label>
        <label style={{display: 'block'}}>
          Note:
          <textarea ref={node => {
            note = node
          }}></textarea>
        </label>
        <label style={{display: 'block'}}>
          Due Date:
          <input type="date" ref={node => {
            dateDue = node
          }}/>
        </label>
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo