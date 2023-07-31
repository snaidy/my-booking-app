import React, { useState } from 'react'
import './login.scss'
import useForm from '../../hooks/useForm'
import { getUser } from '../../services/usersServices'
import Swal from 'sweetalert2'
import eye from "../../assets/eye.svg";
import eyeShow from "../../assets/eye-show.svg";

const Login = ({signIn}) => {
    const [dataForm, handleChange, resetForm ] = useForm()
    const [showPassword, setShowPassword] = useState(false); //estado para mostrar o no la contraseña
const handleSubmit = async(event) =>{
    event.preventDefault()
    console.log(dataForm)
    const loggedUser = await getUser(dataForm)
    if(loggedUser){
      Swal.fire(
        `¡Excelente ${loggedUser.name}!`,
        'Has iniciado sesión exitosamente',
        'success'
      ).then(()=>{
        signIn(true)
      })
    }else{
      Swal.fire(
        'Oopps!',
        'Las credenciales ingresadas son incorrectas',
        'error'
      )
    }
    console.log(loggedUser)
    resetForm()
}

  return (
    
    <form onSubmit={handleSubmit}>
        <label>Correo electrónico:</label>
        <input onChange={handleChange} name='email' value={dataForm?.email || ''} type="text" />
        <label >Contraseña:</label>
        <input className='inpass' onChange={handleChange} name='password' value={dataForm?.password || ''} type={showPassword ? "text" : "password"} placeholder="Ingresa tu contraseña" />
        <img src={showPassword ? eyeShow : eye}
        onClick={() => setShowPassword(!showPassword)} />
        <button type="submit">Iniciar sesión</button>
    </form>
  )
}

export default Login