import React, { useContext } from "react";
import { UserContext } from "../Context/UserContext";
import { UsersData } from "../helpers/UsersData";

const Home = () => {
  const {user, setUser} = useContext(UserContext)
  const _handleLogin = () =>{
    setUser(UsersData);
  }


  return (
    <>
      <h1>Home</h1>
      {
        user && <h2>{user.data.first_name}</h2>
      }

      <button className="btn btn-primary" onClick={_handleLogin}>Login</button>
    </>
  );
};

export default Home;
