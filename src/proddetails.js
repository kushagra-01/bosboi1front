import axios from "axios"
import { useEffect, useState } from "react"

import {useNavigate, useParams } from "react-router";



export const Details =()=>{

    const {id} = useParams();

    const [db,setdb]=useState([])

useEffect(()=>{
    axios.get(`https://bosfull.herokuapp.com/${id}`).then((r)=>{
        setdb(r.data)
    }).catch((e)=>{console.log(e.message)})
},[])


return(
    <>
    <h1>{`address :-${db.address}`}</h1>
    <h1>{`Capacity :-${db.capacity}`}</h1>
    <h1>{`City :-${db.city}`}</h1>
    <h1>{`CostperDay :-${db.costperday}`}</h1>
    <h1>{`name :-${db.name}`}</h1>
    <h1>{`rating :-${db.rating}`}</h1></>

)
}
