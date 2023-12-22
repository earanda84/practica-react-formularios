// import React from 'react'
import Swal from 'sweetalert2'
import { useState } from 'react';
import PropTypes from 'prop-types';
import Button from './button'


const Form = ({addTodo}) => {
    const [ todo, setTodo ] = useState({
        title: '',
        description: '',
        state: 'pendiente',
        priority: false
    });

    const {title, description, state, priority} = todo;

    // Funcion maneja el submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        // Comprobar si usuario dejo espacios en blanco en el formulario

        if(!title.trim() || !description.trim()) {

            return Swal.fire({
                title: 'Algunos campos están vacíos', 
                icon: 'warning', 
                text: 'Debes completar todos los campos del formulario', 
                timer:2000
            }) 
        }
        
        // Agregar nuevo TODO
        addTodo({
            // 1.- Puede ser de esta forma con cada elemento del todo
            // id: Date.now(),
            // title,
            // description,
            // state: state === 'pendiente' ? false : true,
            // priority

            // 2.- O invocando directamente al objeto todo, con spread operators
            id: Date.now(),
            ...todo,
            state: state === 'pendiente' ? false : true,
        })

        const {id} = addTodo;
        console.log(id);
        // Alerta de exito de la tarea agregada
        if(addTodo){
            return Swal.fire({
                position: 'center',
                title: 'TODO Agregado correctamente!', 
                icon: 'success', 
                text: `Se ha agregado una nuevo TODO: ${title}`, 
                showConfirmButton: false,
                timer:2000
            })
        }
    }

  return (
    <form onSubmit={handleSubmit} className="mx-auto border sm:max-w-2xl shadow-xl shadow-indigo-400/50 rounded-md p-10">
        <div className='flex flex-col gap-3 p-5'>
            {/* TODO */}
            <label className='flex font-semibold' htmlFor="title">Ingresa el TODO</label>
            <input 
                className='border border-slate-200 rounded p-2 outline-none'
                id='title'
                type="text"
                name='title'
                value={title}
                placeholder='Ingresa el Todo'
                onChange={(e) => setTodo({...todo, title: e.target.value})}
            />
            {/* Description */}
            <label className='flex font-semibold' htmlFor="description">Description</label>
            <textarea 
                className='border resize-none rounded outline-none p-2 mb-4'
                id="description"
                name="description"
                value={description}
                placeholder='Ingresa una descripción....'
                onChange={(e) => setTodo({...todo, description: e.target.value})}
            >
            </textarea>

            {/* Select */}

            <select 
                className='border border-slate-200 rounded p-2 outline-none'
                id="state"
                name="state"
                value={state}
                onChange={(e) => setTodo({...todo, state: e.target.value})}
            >
                <option value="pendiente">Pendiente</option>
                <option value="completada">Completada</option>
            </select>

            {/* CheckBox */}
            <div className='flex gap-2 mt-5'>
                <input 
                    type="checkbox"
                    name='priority'
                    checked={priority}
                    onChange={(e) => setTodo({...todo, priority: e.target.checked})}
                />
                <label className='flex font-semibold' htmlFor="inputCheck">Prioridad</label>
            </div>

            <Button type='submit' label="Agregar TODO" className="bg-blue-600 font-semibold text-xl p-3 rounded mt-3 text-white"/>
        </div>
    </form>
  )
}

Form.propTypes = {
    addTodo: PropTypes.func
}

export default Form