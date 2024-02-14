import React from "react";

import { Link } from "react-router-dom";

import SearchForm from "./SearchForm.jsx";

const Home = () => {
  //3. Navegação entre rotas
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ul>
        <li>
          <Link to="/users/1">User 1</Link>
        </li>
        <li>
          <Link to="/users/2">User 2</Link>
        </li>
        <li>
          <Link to="/users/3">User 3</Link>
        </li>
      </ul>

      <SearchForm />
    </div>
  );
};

export default Home;
