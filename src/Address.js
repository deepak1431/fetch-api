import React, { useEffect, useState } from 'react'


function Address()  {
    const [address, setAddress] = useState("");

    useEffect(() => {
        const getAddress = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("111 somewhere deep dj, pune, India");
            }, 4000);
        });

        getAddress.then(result => {
            setAddress(result);
        });
    }, []);

    if(!address){
        return <h2>Loading Address...</h2>
    }
  return (
      <>
     <h2>Address Title</h2>
     <h2>{address}</h2>
   </>
  )
}

export default Address;
