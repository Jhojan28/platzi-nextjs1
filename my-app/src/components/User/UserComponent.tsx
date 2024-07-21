import React from "react";


type UserComponentProps = {
  user: {
    nombre: string;
    edad: string;
    cargo: string;
  }
}

export default function UserComponent ({
  user,
}: UserComponentProps) {
  return (
    <div className="flex flex-col rounded-md border-1">
      <h1>{user.nombre}</h1>
      <p>{user.edad}</p>
      <p>{user.cargo}</p>
    </div>
  )
}

