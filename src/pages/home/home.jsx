import React, { useEffect, useState } from "react";
import "./home.scss";
import ActionAreaCard from "../../componentes/card/card";
import { getAlojamientos } from "../../services/bokingServices";
const Home = ({ signIn }) => {
  const [booking, setBooking] = useState([]);
  const propDefault = {
    id: 6,
    name: "habitación en el cocuy",
    idCategory: 1,
    rating: 5,
    pricebynight: 150000,
    image: "https://i.ibb.co/nbWXS19/expediav2-2643971-2382171410-916724.jpg",
  };
  useEffect(() => {
    getAlojamientos().then((response) => {
      setBooking(response)
    })
  }, []);

  return (
    <div>
      <button onClick={() => signIn(false)}>Cerrar sesión</button>
      {booking.length > 0 && booking.map(item => (
         <ActionAreaCard key={item.id} prop={item}/>
      )
        )}
      
    </div>
  );
};

export default Home;
