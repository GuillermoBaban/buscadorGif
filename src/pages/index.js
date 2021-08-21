import React, { useState } from "react";
import { useLocation } from "wouter";
import Ultimabusqueda from "../component/Ultimabusqueda";
import Trending from "../component/TrendingSerches/index";
import logo from "../img/logo.png";

import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Navbar from "react-bootstrap/Navbar";

export default function Home() {
  const [keyword, setKeyword] = useState("");
  const [path, pushLocation] = useLocation();
  console.log(path);

  const handleSubmit = (e) => {
    e.preventDefault();
    pushLocation(`/gif/${keyword}`);
  };

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  return (
    <>
      <Navbar.Brand href="/">
        <img alt="" src={logo} width="50" height="50" className="m-3" />
      </Navbar.Brand>

      <Form onSubmit={handleSubmit}>
        <FormControl
          className="w-50 mx-auto mb-5"
          onSubmit={handleSubmit}
          placeholder="Ingrese el nombre del gif"
          value={keyword}
          onChange={handleChange}
        />
      </Form>
      <h3>Ultima Busqueda</h3>
      <div className="App-main">
        <div className="App-results">
          <Ultimabusqueda />
        </div>
        <div className="App-category">
          <h1>Tendencias</h1>
          <Trending />
        </div>
      </div>
    </>
  );
}
