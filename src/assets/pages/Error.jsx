import React from 'react'
import {useRouteError,NavLink} from 'react-router-dom';

const Error = () => {
    const error= useRouteError();
    console.log(error);


  return (
    <div>
    <h1 >OOps Error Occured</h1>
      {error && error.message}
      <NavLink to = "/"> <button>Go back</button> </NavLink>
    </div>
  )
}

export default Error;
