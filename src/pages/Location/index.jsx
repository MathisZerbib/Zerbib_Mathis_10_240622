import React from 'react';
import { useParams } from 'react-router-dom';


function Location() {
  const { id } = useParams();  
  // do with `userId` what you need to load that user's data
  return (
    <>
      <h1>Location</h1>
      <p>User ID: {id}</p>
    </>
  );
}

  export default Location
