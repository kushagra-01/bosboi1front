import axios from "axios";
import {useState } from "react";

import {useNavigate, useParams } from "react-router";

export const AddHouse = () => {

const [form,setform]=useState({})

const navigate = useNavigate()

console.log(form);
const handleSubmit =(e)=>{
  e.preventDefault()
  axios.post("https://bosfull.herokuapp.com",form).then((r)=>{
 console.log(r.data)  
  })
}


const handleChange =(e)=>{
const {className,value} = e.target
setform({
  ...form,
  [className]:value
})
}










  return (
    <>

    <button onClick={(()=>{navigate("/")})}> Previos list</button>

    <div className="addHouseContainer">
    <form onSubmit={handleSubmit}>
      <label>name</label>
      <input type="text" className="name" value={form.name} onChange={handleChange} id="username" required />
      <br />
      <label>city</label>
      <input value={form.city} type="text" className="city" onChange={handleChange}   required />
      <br />
      <label>address</label>
      <input value={form.address} type="text" className="address" onChange={handleChange} required />
      <br />
      <label>Capacity</label>
      <input value={form.capacity} type="text" className="capacity" onChange={handleChange} required />
      <br />
      <label>costperday</label>
      <input value={form.costperday} type="text=" className="costperday"  onChange={handleChange} required />
      <br />
      <label>rating</label>
      <input value={form.rating} type="number" className="rating"  onChange={handleChange} required />
      <br />
      <label>verified</label>
      <input checked={form.verified} type="boolean" className="verified" onChange={handleChange} required />
      <br />
    
      <input className="submitBtn" type="submit" />
    </form>
  </div>
  



</>
   
  )};
