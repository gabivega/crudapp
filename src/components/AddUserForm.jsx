import React from 'react'
import { useForm } from 'react-hook-form'

export const AddUserForm = (props) => {
    const { register, handleSubmit, formState:{errors} }= useForm(); 
    const onSubmit = (data, e) => {
        console.log(data)
        props.addUser(data)
        e.target.reset()
    }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <label>Name</label>
        <input
            type="text"
            name='name' 
            {...register("name", {
                required:{value:true, message:'Campo Requerido'}
            })}
        />
        <div>{errors.name?.type === 'required' && "Nombre es requerido"}</div>
        <label>UserName</label>
        <input 
            type="text" 
            name='username'
            {...register("username", {
                required:{value:true, message:'Campo Requerido'}
            })}
            />
        <div>{errors.name?.type === 'required' && "Nombre es requerido"}</div>
        <button>Add User</button>
    </form>
    )
}
