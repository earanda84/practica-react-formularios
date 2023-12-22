// import React from 'react'
import PropTypes from 'prop-types'

import ListTodo from './list-todo'

const Todos = ({todos, title, deleteTodo}) => {
  return (
    <div className='space-y-4'>
        
        <h2 className='text-3xl font-semibold'>{title}</h2>

        {/* Lista de Todos enviadas como props*/}
        <ListTodo todos={todos} deleteTodo={deleteTodo}/>
    </div>
  )
}

Todos.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string,
    deleteTodo: PropTypes.func,
}
export default Todos