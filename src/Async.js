import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Async_api(props) {

    const [data,setData]=useState([])


     useEffect(()=>
    {
        
        async function getData(){
            const res= await axios.get(`https://jsonplaceholder.typicode.com/posts`)
            // console.log(res.data)
            setData(res.data)
        }

        getData()
       
    },[])
console.log(data)

    

  return (
    <div>
    {/* {
    data.map((e)=>
    {
        // console.log(e.title)
    })
    } 
  */}

        
    </div>
  )
}
