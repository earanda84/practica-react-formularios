import { useState } from "react"
import Form from "./components/form"
import Todos from "./components/todos";

const initialStateTodos = [
  {
    id:1,
    title: 'Todo #1',
    description: 'Descripción #1',
    state: true,
    priority: true,
  },
  {
    id:2,
    title: 'Todo #2',
    description: 'Descripción #2',
    state: false,
    priority: false,
  },
  {
    id:3,
    title: 'Todo #3',
    description: 'Descripción #3',
    state: false,
    priority: true,
  },
];

function App() {

  const [todos, setTodos] = useState(initialStateTodos)
  // Para que no existan problemas en el envío de los props, se realiza en el componente que envuelve a los otros componentes y estos se envíen meidante props al componente envuelto.
  const addTodo = (todo) => {
    setTodos([...todos, todo])
  }

  const deleteTodo = (id) => {
    // Crear nuevo arreglo con sin el elemento id que se pasar por parámetro
    const newArray = todos.filter(todo => todo.id !== id);

    setTodos(newArray);
  }

  return (
    <>
      <div className="text-center space-y-10 mt-10">
        <h1 className="text-5xl font-bold underline mb-10">Formulario TODO</h1>
        <Form addTodo={addTodo} />
        <Todos todos={todos} title="Lista de Todos" deleteTodo={deleteTodo}/>
      </div>
    </>
  )
}

export default App
