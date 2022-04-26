
import './App.css';
import BasicTable from './home';
import { Routes,Route } from 'react-router-dom';
import { AddHouse } from './AddHouse/AddHouse';
import { Link } from "react-router-dom";
import { Details } from "../src/proddetails";

function App() {

  return (
  <>
    <Routes>
        <Route path="/" element={<BasicTable/>}/>
        <Route path="/create" element={<AddHouse/>}/>
         <Route path="/:id" element={<Details/>} />
      
      </Routes>
    </>
  )
}

export default App;
