import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addTodo: (value)=> { return dispatch(addTodo(value))
    },
  }
};

const AddTodo = ({addTodo}) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        addTodo(input.value)
        input.value = ''
      }}>
        <input ref={ node => { input = node }} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}


export default connect(null, mapDispatchToProps)(AddTodo);
