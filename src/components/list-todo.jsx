import PropTypes from 'prop-types'
import Button from './button'

const ListTodo = ({todos, deleteTodo}) => {

    // const {id, title, description, state, priority} = todos;
  return (
    <div className='max-w-2xl mx-auto flex bg-gray-200 mb-10'>
        
        <table className='table-auto divide-y divide-x min-w-full'>
            <thead className='bg-black text-white '>
                <tr>
                    <th scope='col'>Id</th>
                    <th scope='col'>Title</th>
                    <th scope='col'>Description</th>
                    <th scope='col'>Actualizar</th>
                    <th scope='col'>Eliminar</th>
                    <th scope='col'>Prioridad</th>
                </tr>
            </thead>
            <tbody>
                {
                    todos.map((todo) => (
                        <tr key={todo.id} className=''>
                            <td>{todo.id}</td>
                            {
                                todo.state 
                                    ? <td className='text-green-600 line-through'>{todo.title}</td>
                                    : <td className='text-red-600'>{todo.title}</td>
                            }

                            {
                                todo.state 
                                    ? <td className='text-green-600 line-through'>{todo.description}</td>
                                    : <td className='text-red-600'>{todo.description}</td>
                            }
                            
                            <td>
                                <Button 
                                    type="submit" 
                                    label="Actualizar" 
                                    className='bg-yellow-400 rounded p-2 font-semibold'
                                    
                                />
                            </td>
                            <td>
                                <Button 
                                    type="submit" 
                                    label="Eliminar" 
                                    className='bg-red-600 rounded text-white p-2 font-semibold' 
                                    deleteTodo={() => deleteTodo(todo.id)}
                                />
                            </td>
                            {
                                todo.priority && <td><span className='bg-sky-600 rounded-md text-white px-1.5 py-0.5 font-semibold'>{'Prioritario'}</span></td>
                            }
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

ListTodo.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object),
    deleteTodo: PropTypes.func,
}
export default ListTodo