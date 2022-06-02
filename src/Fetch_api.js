import React, { useEffect, useState } from 'react'

export default function Fetch_api() {

const [data,setData]=useState([0])
   

    useEffect(()=>
    {

        fetch('https://jsonplaceholder.typicode.com/posts').then((result)=>
        {
            result.json().then((res)=>
            {
                setData(res)
            })
        })


        async function getData(){
            const result=await fetch('https://jsonplaceholder.typicode.com/posts');
              setData(await result.json())
        }
        getData()
    },[])


    // console.log(data)

  return (
    <div>Fetch_api

    {data.map((e)=>
    {
        console.log(e.id)
        
    })}


    </div>
  )
}
