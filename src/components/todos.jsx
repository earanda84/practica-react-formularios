// import React from 'react'
import PropTypes from 'prop-types'

import ListTodo from './list-todo'

const Todos = ({todos, title, deleteTodo, updateTodo}) => {
  return (
    <div className='space-y-10'>
        
        <h2 className='text-3xl font-semibold'>{title}</h2>

        {/* Lista de Todos enviadas como props*/}
        <ListTodo todos={todos} deleteTodo={deleteTodo} updateTodo={updateTodo}/>
        {
            todos.length === 0 && <h3 className='text-2xl font-semibold'>Sin TODOS</h3>
        }
    </div>
  )
}

Todos.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string,
    deleteTodo: PropTypes.func,
    updateTodo: PropTypes.func,
}
export default Todos