import { useEffect, useState } from "react"
import Form from "./components/form"
import Todos from "./components/todos";

// 1.- Se declara esta constante, para que no se ejecute cada vez que se carge el componente y a su vez, se cargue antes de que comience la lógica de REACT del componente.
// 2.- Para usar localStorage, ósea, el almacenamiento del navegador, se parsea la información que venta del navegador, para que JavaScript pueda entender el formato.
// 3.- Se obtiene del localStorage, la información parseada, con la clave 'todos', que fue con la cual se seteo en el useEffect, la información enviada al almacenamiento del navegador
// 4.- Se almacena en la constante la información pasada desde el localStorage ya parseada, si existe, caso contrario, se inicializa con arreglo vacío.
const initialStateTodos = JSON.parse(localStorage.getItem('todos')) || [{id: 1, title: 'Todo de prueba', description: 'Descripción de prueba', state: false, priority: true}];

function App() {

  const [todos, setTodos] = useState(initialStateTodos);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  },[todos])
  // Para que no existan problemas en el envío de los props, se realiza en el componente que envuelve a los otros componentes y estos se envíen meidante props al componente envuelto.
  
  // Agregar todos
  const addTodo = (todo) => {
    setTodos([...todos, todo])
  }

  // Elimuinar TODOS
  const deleteTodo = (id) => {
    // Crear nuevo arreglo con sin el elemento id que se pasar por parámetro
    const newArray = todos.filter(todo => todo.id !== id);

    setTodos(newArray);
  }

  // Actualizar TODOS
  const updateTodo = (id) => {
    // Esta forma de manera directa modifica la propiedad state en el arrego original, lo que no es recomendado para el estado de REACT, lo preferible siempres es que se cree una copia del arreglo original, para permitir el principio de INMUTABILIDAD.
    // const newArrayTodos = todos.map((todo) => {
      
    //   if(todo.id === id){
    //     todo.state = !todo.state;
    //   }
    
    //   return todo;
    // })
  
    // console.log(newArrayTodos);
    // setTodos(newArrayTodos)

    // Esta forma, invoca la funcion del estado, para crear una copia superficial del arreglo original y modificar la propiedad en la copia del arreglo, sin modificar el arreglo original, mediante los spreads operator
    // ESTO PERMITE EL PRINCIPIO DE INMUTABILIDAD EN REACT, PARA TENER MEJOR SEGUIMIENTO O RASTREO DE CAMBIOS Y AYUDA A EVITAR EFECTOS SECUNDARIOS EN EL ESTADO.
    // SE MANTIENE UN HISTORIAL DE CAMBIOS MAS CLAROS.
    // MEJORA EL RENDIMIENTO, PERMITIENDO ESCRIBIR CODIGO MAS PREDECIBLE Y FACIL DE MANTENER
    setTodos((prevTodos) => [...prevTodos].map((todo) => todo.id === id ? { ...todo, state: !todo.state } : todo ))
  }

  // Ordenar por prioridad
  const orderTodo = (arrayTodos) => {
    return [...arrayTodos].sort((acc, curr) => {
      if(acc.priority === curr.priority) return 0
      if(acc.priority === true) return -1
      if(acc.priority === false) return 1
    })
  }

  return (
    <>
      <div className="text-center space-y-10 mt-10">
        <h1 className="text-5xl font-bold underline mb-10">Formulario TODO</h1>
        <Form addTodo={addTodo} />
        <Todos 
          todos={orderTodo(todos)} 
          title="Lista de Todos" 
          deleteTodo={deleteTodo} 
          updateTodo={updateTodo} 
        />
      </div>
    </>
  )
}

export default App
