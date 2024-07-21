import React, { useState, useEffect } from "react";

import UserComponent from "@/components/User/UserComponent";

export default function Home() {
  const [estado, setEstado] = useState(0); // Asi se define un estado
  const [another, setAnother] = useState(0);
  let sumatoria = 0; // Esto es una variable NORMAL, no un estado.
  const users = [
    {
      nombre: 'Jhojan',
      edad: '28',
      cargo: 'Developer',
    },
    {
      nombre: 'El ñeda',
      edad: '45',
      cargo: 'Developer',
    },
    {
      nombre: 'Santiago',
      edad: '7',
      cargo: 'Developer',
    },
  ];

  const reRender = () => {
    setEstado(estado + 1);
  };

  useEffect(() => {
    console.log('Me ejecuté solo una vez');
  }, []); // Este useEffect solo se ejecuta UNA VEZ

  useEffect(() => {
    console.log(`Estado me hizo ejecutar otra vez: ${estado}`);
  }, [estado]); // Este useEffect se va a ejecutar cada que la variable "estado" cambie.

  useEffect(() => {
    console.log(`Estado me hizo ejecutar otra vez: ${another}`);
  }, [another]);

  useEffect(() => {
    console.log(`Estado me hizo ejecutar otra vez: ${another} and ${estado}`);
  }, [another, estado]); // Si alguna de las 2 dependencias cambia, el useEffect se vuelve a ejecutar.

  useEffect(() => {
    return () => {
      console.log('chao');
    }
  });

  return (
    <div className="flex gap-2 flex-wrap">
      {users.map((user, key) => (
        <UserComponent user={user} key={key} />
      ))}
      <button onClick={reRender} className="text-white">Cambiar estado</button>
    </div>
  );
}
