import React , {useEffect } from 'react'
import { useForm } from 'react-hook-form'

export const EditUserForm = (props) => {

    console.log(props.currentUser)
    
    const { register, handleSubmit, formState:{errors}, setValue }= useForm({
        defaultValues: props.currentUser
    }); 
    useEffect(() => {
        setValue('name', props.currentUser.name);
        setValue('username', props.currentUser.username);
    })
   
   
    const onSubmit = (data, e) => {
        console.log(data)
        props.updateUser(props.currentUser.id, data)
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
        <button>Edit User</button>
    </form>
    )
}
