import React, { useContext } from "react";
import { UserContext } from "../Context/UserContext";
import { UsersData } from "../helpers/UsersData";

const Home = () => {
  const { user, setUser } = useContext(UserContext);
  const _handleLogin = () => {
    setUser(UsersData);
  };
  const _handleLogout = () =>{
    setUser(null)
  }

  return (
    <>
      <div className="container text-center mt-5">
        <h1>Home</h1>
        {
          !user ?  <button className="btn btn-primary" onClick={_handleLogin}>
          Login
        </button> 
        : <button className="btn btn-danger" onClick={_handleLogout}>LogOut</button>
        }
       
      </div>
    </>
  );
};

export default Home;
