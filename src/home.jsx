import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import { Sort } from "@mui/icons-material";
import {useNavigate, useParams } from "react-router";
export default function BasicTable() {
  const [data, setdata] = useState([]);
  const [Shoe,setShoe]=useState("Ascending");
  const navigate = useNavigate()

  useEffect(() => {
    axios.get("https://bosfull.herokuapp.com").then(({ data }) => {
      setdata(data);
    });
  }, []);



  const Sort=()=>{
if(Shoe=="Ascending"){
  setShoe("Desending")

  setdata([...data.sort((a,b)=>{return a.rating-b.rating})])
}
else{
  setShoe("Ascending")
  setdata(data.sort((a,b)=>{return b.rating-a.rating}))
}
  }
  


  const Scity =(e)=>{


    console.log(e)

    if(e=="all"){

      axios.get("https://bosfull.herokuapp.com").then(({ data }) => {
        setdata(data);
      });
      
    }
    else{

      axios.get("https://bosfull.herokuapp.com").then(({ data }) => {
      
    setdata(data.filter((el)=>el.city==e))
      });


    }
   
  }




  return (

    
    <TableContainer component={Paper}>
        <TableCell onClick={(()=>{navigate("/create")})}>create form</TableCell>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Address</TableCell>
            <TableCell align="right">Capacity</TableCell>
            <TableCell align="right">Nmae</TableCell>
        
            <TableCell align="right">
              <select name="city" id="city" onChange={((e)=>{Scity(e.target.value)})} placeholder="City">
              <option value="all">All cities</option>
                <option value="Anápolis">Anápolis</option>
                <option value="Liloy">Liloy</option>
                <option value="Pedamaran">Pedamaran</option>
                <option value="Burirao">Burirao</option>
              </select>
            </TableCell>
          <TableCell align="right">city</TableCell>
            <TableCell align="right" onClick={(()=>{Sort()})}><button>{Shoe}</button></TableCell>
         
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
           
              <TableCell align="right" onClick={(()=>{navigate(`/${row._id}`)})}>{row.address}</TableCell>
              <TableCell align="right" onClick={(()=>{navigate(`/${row._id}`)})}>{row.capacity}</TableCell>
              <TableCell align="right" onClick={(()=>{navigate(`/${row._id}`)})}>{row.city}</TableCell>
              <TableCell align="right" onClick={(()=>{navigate(`/${row._id}`)})}>{row.costperday}</TableCell>
              <TableCell align="right" onClick={(()=>{navigate(`/${row._id}`)})}>{row.name}</TableCell>
              <TableCell align="right" onClick={(()=>{navigate(`/${row._id}`)})}>{row.rating}</TableCell>
              <TableCell align="right" onClick={(()=>{navigate(`/${row._id}`)})}>{row.verified}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
