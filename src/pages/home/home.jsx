import React from 'react'

const Home = ({signIn}) => {
  return (
    <div>
      <button onClick={()=>signIn(false)}>Cerrar sesión</button>
    </div>
  )
}

export default Home