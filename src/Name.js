import React, { useEffect, useState } from 'react'
import Address from './Address';

function Name()  {
    const [name, setName] = useState(" ");

    useEffect(() => {
        const getName = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("deep");
            }, 4000);
        });

        getName.then(result => {
            setName(result);
        });
    }, []);

    if(!name){
        return <h2>Loading Name...</h2>
    }
  return (
      <>
     <h2>Title</h2>
     <h2>{name}</h2>
     <Address />
    </>
  )
}

export default Name
