import React from 'react'
import './login.scss'
import useForm from '../../hooks/useForm'
const Login = () => {
    const [dataForm, handleChange, resetForm ] = useForm()
const handleSubmit = (event) =>{
    event.preventDefault()
    console.log(dataForm)
    resetForm()
}

  return (
    
    <form onSubmit={handleSubmit}>
        <label>Correo electrónico:</label>
        <input onChange={handleChange} name='email' value={dataForm?.email || ''} type="text" />
        <label >Contraseña:</label>
        <input  onChange={handleChange} name='password' value={dataForm?.password || ''} type="password" />
        <button type="submit">Iniciar sesión</button>
    </form>
  )
}

export default Login