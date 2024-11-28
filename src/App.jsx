import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import "bootstrap/dist/css/bootstrap.min.css"
import Header from "./Components/Header";
import ListFlor from "./Components/Lists/ListFlor";
import FlorComponent from "./Components/Forms/FlorComponent";
import ListLugar from "./Components/Lists/ListLugar";
import LugarComponent from "./Components/Forms/LugarComponent";
import AtributosList from "./Components/Lists/AtributosList";
import FooterComponent from "./Components/FooterComponent";
import AtributoForm from "./Components/Forms/AtributoForm";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />

          <Route path="/lists/flores" element={<ListFlor/>} />
          <Route path="/lists/lugares" element={<ListLugar/>} />
          <Route path="/lists/atributos" element={<AtributosList/>} />
          

          <Route path="/crear-flor" element={<FlorComponent/>}/>
          <Route path="/crear-lugar" element={<LugarComponent/>}/>
          <Route path="/crear-atributo" element={<AtributoForm/>}/>

        </Routes>
        <FooterComponent/>
      </BrowserRouter>
    </>
  )
}

export default App
